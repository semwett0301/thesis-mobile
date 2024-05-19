import { City } from "../../types/api/City";

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
    name: string;
  };
  [PAGES.CITY_SEARCH]: {
    title: string;
    setCity: (value: City) => void;
  };
};
