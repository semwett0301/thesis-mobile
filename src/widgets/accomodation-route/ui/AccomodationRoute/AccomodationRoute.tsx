import { useIsFocused } from "@react-navigation/core";
import { useRoute } from "entities/route";
import { AccomodationList } from "features/accomodation-list";
import React, { useEffect, useState } from "react";
import { Accomodation } from "shared/types/api/Accomodation";

import { getAccommodations } from "../../api";
import { ACCOMMODATION_LABEL } from "../../config";

export const AccomodationRoute = () => {
  const [accommodations, setAccommodations] = useState<Accomodation[]>([]);
  const { route } = useRoute();
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchAccommodation = async () => {
      if (route) {
        const { data } = await getAccommodations({
          city: route.end_city,
          end_date: route.end_date,
          max_price: route.accommodation_price,
          start_date: route.start_date,
        });

        setAccommodations(data);
      }
    };

    if (isFocused) fetchAccommodation().catch((e) => console.error(e));
  }, [isFocused]);

  return <AccomodationList data={accommodations} label={ACCOMMODATION_LABEL} />;
};
