import { useRoute } from "entities/route";
import { RoutePointCard } from "entities/route-point";
import React from "react";
import { Section } from "shared/ui/layouts";

import { CustomCarousel } from "../../../../shared/ui/atoms";
import { POINTS_LABEL } from "../../config";

export const PointsRoute = () => {
  const { route } = useRoute();

  return (
    <Section label={POINTS_LABEL}>
      <CustomCarousel>
        {route?.route_points.map((point) => (
          <RoutePointCard key={point.id} data={point} />
        ))}
      </CustomCarousel>
    </Section>
  );
};
