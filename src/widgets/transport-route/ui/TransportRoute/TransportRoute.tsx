import { Flex } from "@ant-design/react-native";
import { TransportList } from "features/transport-list";
import React from "react";
import { TransportResponse } from "shared/types/api/response/TransportResponse";
import { AIRPLANE_LABEL, RAILWAY_LABEL } from "widgets/transport-route/config";

interface Props {
  airplaneTickets: TransportResponse[];
  railwayTickets: TransportResponse[];
}

export const TransportRoute = ({ airplaneTickets, railwayTickets }: Props) => {
  return (
    <Flex direction="column">
      <TransportList isLoading data={airplaneTickets} label={AIRPLANE_LABEL} />
      <TransportList isLoading data={railwayTickets} label={RAILWAY_LABEL} />
    </Flex>
  );
};
