import React, { useMemo } from "react";
import { Marker, Region } from "react-native-maps";
import { CustomMap } from "shared/ui/atoms";

import { Coords } from "../../../../shared/types/api/Coords";
import { INITIAL_COORDS } from "../../config";

interface Props {
  data?: Coords;
}

export const PointMap = ({ data = INITIAL_COORDS }: Props) => {
  const initialRegion = useMemo<Region>(
    () => ({
      ...data,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }),
    [data],
  );

  return (
    <CustomMap initialRegion={initialRegion}>
      <Marker coordinate={data} />
    </CustomMap>
  );
};
