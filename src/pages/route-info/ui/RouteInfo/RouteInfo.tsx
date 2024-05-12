import { useAuth } from "entities/auth";
import { Map } from "entities/coords";
import {
  RouteExistenceChecker,
  RouteSaveButton,
  useRoute,
} from "entities/route";
import { Page, Section } from "shared/ui/layouts";
import { AccomodationRoute } from "widgets/accomodation-route";
import { PointsRoute } from "widgets/points-route";
import { TransportRoute } from "widgets/transport-route";

export const RouteInfo = () => {
  const { route } = useRoute();
  const { isAuth } = useAuth();

  const coords = route?.route_points.map((point) => point.coords) ?? [];

  return (
    <RouteExistenceChecker>
      <Page>
        <TransportRoute airplaneTickets={[]} railwayTickets={[]} />
        <AccomodationRoute />
        <PointsRoute />
        <Section label="Карта">
          <Map mode="route" coords={coords} />
        </Section>
        {isAuth && !route?.is_saved && <RouteSaveButton />}
      </Page>
    </RouteExistenceChecker>
  );
};
