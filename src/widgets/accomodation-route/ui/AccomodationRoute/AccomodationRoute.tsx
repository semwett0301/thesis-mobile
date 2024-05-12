import { AccomodationList } from "features/accomodation-list";
import React from "react";

import { ACCOMMODATION_LABEL } from "../../config";

export const AccomodationRoute = () => {
  return <AccomodationList data={[]} label={ACCOMMODATION_LABEL} />;
};
