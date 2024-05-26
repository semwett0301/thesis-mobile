import { Flex } from "@ant-design/react-native";
import { useIsFocused } from "@react-navigation/core";
import { useRoute } from "entities/route";
import { TransportList } from "features/transport-list";
import React, { useEffect, useMemo, useState } from "react";
import { Transport } from "shared/types/api/Transport";
import { AIRPLANE_LABEL, RAILWAY_LABEL } from "widgets/transport-route/config";

import { getTickets } from "../../api";
import { TransportRequest } from "../../types";

export const TransportRoute = () => {
  const isFocused = useIsFocused();

  const { route } = useRoute();

  const [airplaneTickets, setAirplaneTickets] = useState<Transport[]>([]);
  const [railwayTickets, setRailwayTickets] = useState<Transport[]>([]);

  const [airlineLoaded, setAirlineLoaded] = useState(false);
  const [railwayLoaded, setRailwayLoaded] = useState(false);

  const requestParams = useMemo<Omit<TransportRequest, "type"> | null>(
    () =>
      route
        ? {
            end_city: route.end_city.name,
            end_city_iata: route.end_city.iata,
            end_date: route.end_date,
            max_price: route.transport_price,
            start_city: route.start_city.name,
            start_city_iata: route.start_city.iata,
            start_date: route.start_date,
          }
        : null,
    [route],
  );

  useEffect(() => {
    const fetchAirplaneTickets = async () => {
      if (requestParams) {
        const { data } = await getTickets({
          type: "airplane",
          ...requestParams,
        });
        setAirplaneTickets(data);
        setAirlineLoaded(true);
      }
    };

    if (isFocused) {
      setAirlineLoaded(false);
      fetchAirplaneTickets().catch((e) => console.error(e));
    }
  }, [isFocused]);

  useEffect(() => {
    const fetchRailwayTickets = async () => {
      if (requestParams) {
        const { data } = await getTickets({
          type: "railway",
          ...requestParams,
        });
        setRailwayTickets(data);
        setRailwayLoaded(true);
      }
    };

    if (isFocused) {
      setRailwayLoaded(false);
      fetchRailwayTickets().catch((e) => console.error(e));
    }
  }, [isFocused]);

  return (
    <Flex direction="column">
      {!(!airplaneTickets.length && airlineLoaded) && (
        <TransportList data={airplaneTickets} label={AIRPLANE_LABEL} />
      )}
      {!(!railwayTickets.length && railwayLoaded) && (
        <TransportList data={railwayTickets} label={RAILWAY_LABEL} />
      )}
    </Flex>
  );
};
