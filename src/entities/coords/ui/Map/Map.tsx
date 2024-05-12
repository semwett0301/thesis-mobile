import React from "react";

import { Coords } from "../../../../shared/types/api/Coords";
import { PointMap } from "../PointMap";
import { RouteMap } from "../RouteMap";

interface PointProps {
  mode: "point";
  coords?: Coords;
}

interface RouteProps {
  mode: "route";
  coords?: Coords[];
}

type Props = PointProps | RouteProps;

export const Map = ({ coords, mode }: Props) => {
  return mode === "point" ? (
    <PointMap data={coords} />
  ) : (
    <RouteMap data={coords} />
  );
};
