import { Id } from "shared/types/api/common/Id";
import { CityResponse } from "shared/types/api/response/CityResponse";

export enum PAGES {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  REQUEST = "REQUEST",
  CITY_SEARCH = "CITY_SEARCH",
  ROUTES = "ROUTES",
  ROUTE_INFO = "ROUTE_INFO",
  ROUTE_POINT_INFO = "ROUTE_POINT_INFO",
}

export type ParamList = {
  [PAGES.LOGIN]: undefined;
  [PAGES.REGISTER]: undefined;
  [PAGES.REQUEST]: undefined;
  [PAGES.ROUTES]: undefined;
  [PAGES.ROUTE_INFO]: undefined;
  [PAGES.ROUTE_POINT_INFO]: {
    id: Id;
  };
  [PAGES.CITY_SEARCH]: {
    title: string;
    setCity: (value: CityResponse) => void;
  };
};
