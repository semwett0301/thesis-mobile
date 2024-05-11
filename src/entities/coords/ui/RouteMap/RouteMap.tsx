import React, { useMemo } from "react";
import { Region } from "react-native-maps";
import { Coords } from "shared/types/api/common/Coords";
import { CustomMap } from "shared/ui/atoms";

import { INITIAL_COORDS } from "../../config";

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

  return <CustomMap initialRegion={initialRegion} />;
};
