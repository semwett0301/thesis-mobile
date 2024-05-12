import { TransportCard } from "entities/transport";
import React from "react";
import { TransportResponse } from "shared/types/api/response/TransportResponse";
import { CustomSkeleton } from "shared/ui/atoms";
import { Section } from "shared/ui/layouts";

interface Props {
  label?: string;
  data: TransportResponse[];
}

export const TransportList = ({ data, label }: Props) => {
  return (
    <Section label={label}>
      {!data.length ? (
        <CustomSkeleton height={208} />
      ) : (
        data.map((transport) => (
          <TransportCard key={transport.id} data={transport} />
        ))
      )}
    </Section>
  );
};
