import { Toast } from "@ant-design/react-native";
import { StackActions } from "@react-navigation/native";
import { useRoute } from "entities/route";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { Page } from "shared/ui/layouts";
import { TransportRoute } from "widgets/transport-route";

export const RouteInfo = () => {
  const navigation = useAppNavigation();
  const { route } = useRoute();

  if (!route) {
    Toast.fail("Маршрут не получен");
    navigation.dispatch(StackActions.replace(PAGES.REQUEST));
    return <Page />;
  }

  return (
    <Page>
      <TransportRoute
        airplaneTickets={route.airplane_tickets}
        railwayTickets={route.railway_tickets}
      />
    </Page>
  );
};
