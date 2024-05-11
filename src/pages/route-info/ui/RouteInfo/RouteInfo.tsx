import { useAuth } from "entities/auth";
import { Map } from "entities/coords";
import {
  RouteExistenceChecker,
  RouteSaveButton,
  useRoute,
} from "entities/route";
import { Page, Section } from "shared/ui/layouts";
import { TransportRoute } from "widgets/transport-route";

export const RouteInfo = () => {
  const { route } = useRoute();
  const { isAuth } = useAuth();

  const coords = route?.route_points.map((point) => point.coords) ?? [];

  return (
    <RouteExistenceChecker>
      <Page>
        <TransportRoute airplaneTickets={[]} railwayTickets={[]} />
        <Section label="Карта">
          <Map mode="route" coords={coords} />
        </Section>
        {isAuth && <RouteSaveButton />}
      </Page>
    </RouteExistenceChecker>
  );
};
