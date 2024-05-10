import { TransportCard } from "entities/transport";
import React from "react";
import { TransportResponse } from "shared/types/api/response/TransportResponse";
import { Section } from "shared/ui/layouts";

interface Props {
  label?: string;
  data: TransportResponse[];
}

export const TransportList = ({ data, label }: Props) => {
  return (
    <Section label={label}>
      {data.map((transport) => (
        <TransportCard key={transport.id} data={transport} />
      ))}
    </Section>
  );
};
