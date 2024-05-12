import { AccomodationCard } from "entities/accomodation";
import React from "react";
import { Accomodation } from "shared/types/api/Accomodation";
import { CustomCarousel, CustomSkeleton } from "shared/ui/atoms";
import { Section } from "shared/ui/layouts";

import { styles } from "./styles";

interface Props {
  label?: string;
  data: Accomodation[];
}

export const AccomodationList = ({ data, label }: Props) => {
  return (
    <Section label={label}>
      {!data.length ? (
        <CustomSkeleton height={104} />
      ) : (
        <CustomCarousel style={styles.carousel}>
          {data.map((transport) => (
            <AccomodationCard key={transport.id} data={transport} />
          ))}
        </CustomCarousel>
      )}
    </Section>
  );
};
