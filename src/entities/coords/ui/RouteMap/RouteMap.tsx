import React, { ReactNode, useMemo } from "react";
import { Marker, Region } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { theme } from "shared/theme";
import { CustomMap } from "shared/ui/atoms";

import { Coords } from "../../../../shared/types/api/Coords";
import { API_KEY, INITIAL_COORDS } from "../../config";

interface Props {
  data?: Coords[];
}

export const RouteMap = ({ data = [] }: Props) => {
  const initialRegion = useMemo<Region>(() => {
    const firstPoint = data[0] ?? INITIAL_COORDS;

    return {
      ...firstPoint,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
  }, [data]);

  const ResultRoute = useMemo(
    () =>
      data?.reduce((acc: ReactNode[], coord, idx) => {
        if (idx === 0) {
          acc.push(<Marker key={coord.latitude} coordinate={coord} />);
        } else {
          acc.push(<Marker key={coord.latitude} coordinate={coord} />);
          acc.push(
            <MapViewDirections
              key={coord.latitude + data[idx - 1].latitude}
              apikey={API_KEY}
              origin={data[idx - 1]}
              destination={coord}
              strokeWidth={3}
              strokeColor={theme.brand_error}
            />,
          );
        }
        return acc;
      }, []),
    [data],
  );

  return <CustomMap initialRegion={initialRegion}>{ResultRoute}</CustomMap>;
};
