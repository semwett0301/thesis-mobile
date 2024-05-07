import { CityResponse } from "shared/types/api/response/CityResponse";

export enum PAGES {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  REQUEST = "REQUEST",
  CITY_SEARCH = "CITY_SEARCH",
}

export type ParamList = {
  [PAGES.LOGIN]: undefined;
  [PAGES.REGISTER]: undefined;
  [PAGES.REQUEST]: undefined;
  [PAGES.CITY_SEARCH]: {
    title: string;
    setCity: (value: CityResponse) => void;
  };
};
