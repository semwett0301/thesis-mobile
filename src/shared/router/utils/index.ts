import { createNavigationContainerRef } from "@react-navigation/core";

import { ParamList } from "../types/pages";

export const navigationRef = createNavigationContainerRef<ParamList>();

export const navigateOutside = <RouteName extends keyof ParamList>(
  ...args: RouteName extends unknown
    ? undefined extends ParamList[RouteName]
      ? [screen: RouteName] | [screen: RouteName, params: ParamList[RouteName]]
      : [screen: RouteName, params: ParamList[RouteName]]
    : never
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args);
  }
};

export const getRouteOutside = () => {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute() ?? null;
  }

  return null;
};
