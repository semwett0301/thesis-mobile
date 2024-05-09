import { RouteProp } from "@react-navigation/core/src/types";
import { useRoute } from "@react-navigation/native";
import { PAGES, ParamList } from "shared/router/types/pages";

export const useAppRoute = <T extends PAGES>() =>
  useRoute<RouteProp<ParamList, T>>();
