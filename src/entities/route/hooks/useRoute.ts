import { RouteContext } from "entities/route/context";
import { useContext } from "react";

export const useRoute = () => {
  const { route, setRoute } = useContext(RouteContext);

  return {
    route,
    setRoute,
  };
};
