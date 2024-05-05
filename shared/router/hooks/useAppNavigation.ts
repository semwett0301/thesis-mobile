import { NavigationProp, useNavigation } from "@react-navigation/native";

import { ParamList } from "../types/pages";

export const useAppNavigation = () =>
  useNavigation<NavigationProp<ParamList>>();
