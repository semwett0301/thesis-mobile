import { Map } from "entities/coords";
import { RouteExistenceChecker, useRoute } from "entities/route";
import { RoutePointDescription } from "entities/route-point";
import React from "react";
import { useAppRoute } from "shared/router/hooks/useAppRoute";
import { PAGES } from "shared/router/types/pages";
import { Page, Section } from "shared/ui/layouts";

import { ROUTE_DESCRIPTION_LABEL, ROUTE_MAP_LABEL } from "../../config";

export const RoutePointInfo = () => {
  const { route } = useRoute();
  const {
    params: { name },
  } = useAppRoute<PAGES.ROUTE_POINT_INFO>();

  const data = route?.route_points.find((point) => point.name === name);

  return (
    <RouteExistenceChecker>
      <Page>
        <Section label={ROUTE_DESCRIPTION_LABEL}>
          <RoutePointDescription data={data} />
        </Section>
        <Section label={ROUTE_MAP_LABEL}>
          <Map mode="point" coords={data?.coords} />
        </Section>
      </Page>
    </RouteExistenceChecker>
  );
};
