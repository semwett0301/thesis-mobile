import { TransportCard } from "entities/transport";
import React from "react";
import { CustomSkeleton } from "shared/ui/atoms";
import { Section } from "shared/ui/layouts";

import { Transport } from "../../../../shared/types/api/Transport";

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
          <TransportCard key={transport.link} data={transport} />
        ))
      )}
    </Section>
  );
};
