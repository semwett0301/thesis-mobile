import { AccomodationCard } from "entities/accomodation";
import React from "react";
import { AccomodationResponse } from "shared/types/api/response/AccomodationResponse";
import { CustomCarousel, CustomSkeleton } from "shared/ui/atoms";
import { Section } from "shared/ui/layouts";

interface Props {
  label?: string;
  data: AccomodationResponse[];
}

export const AccomodationList = ({ data, label }: Props) => {
  return (
    <Section label={label}>
      {!data.length ? (
        <CustomSkeleton height={104} />
      ) : (
        <CustomCarousel>
          {data.map((transport) => (
            <AccomodationCard key={transport.id} data={transport} />
          ))}
        </CustomCarousel>
      )}
    </Section>
  );
};
