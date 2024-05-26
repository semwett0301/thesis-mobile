import { TransportCard } from "entities/transport";
import React from "react";
import { Transport } from "shared/types/api/Transport";
import { CustomSkeleton } from "shared/ui/atoms";
import { Section } from "shared/ui/layouts";

interface Props {
  label?: string;
  data: Transport[];
}

export const TransportList = ({ data, label }: Props) => {
  return (
    <Section label={label}>
      {!data.length ? (
        <CustomSkeleton height={208} />
      ) : (
        data.map((transport) => (
          <TransportCard key={transport.start_city} data={transport} />
        ))
      )}
    </Section>
  );
};
