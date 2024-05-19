import { useRoute } from "entities/route";
import { RoutePointCard } from "entities/route-point";
import React from "react";
import { CustomCarousel } from "shared/ui/atoms";
import { Section } from "shared/ui/layouts";

import { POINTS_LABEL } from "../../config";
import { styles } from "./styles";

export const PointsRoute = () => {
  const { route } = useRoute();

  return (
    <Section label={POINTS_LABEL}>
      <CustomCarousel style={styles.carousel}>
        {route?.route_points.map((point) => (
          <RoutePointCard key={point.name} data={point} />
        ))}
      </CustomCarousel>
    </Section>
  );
};
