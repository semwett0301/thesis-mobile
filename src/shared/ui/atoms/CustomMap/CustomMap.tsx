import React from "react";
import MapView from "react-native-maps";
import { MapViewProps } from "react-native-maps/lib/MapView";

export const CustomMap = ({ style, ...props }: MapViewProps) => {
  return (
    <MapView
      style={{
        height: 280,
        width: "100%",
        ...(style as object),
      }}
      {...props}
    />
  );
};
