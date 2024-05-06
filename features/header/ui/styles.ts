import Constants from "expo-constants";
import { StyleSheet } from "react-native";

import { theme } from "../../../shared/theme";

export const styles = StyleSheet.create({
  headerText: {
    fontSize: 17,
  },
  leftSide: {
    width: 58,
  },
  menuText: {
    color: theme.color_text_base_inverse,
    fontSize: 17,
  },
  rightSide: {
    width: 58,
  },
  wrapper: {
    backgroundColor: theme.fill_primary,
    height: 45 + Constants.statusBarHeight,
    paddingTop: Constants.statusBarHeight,
    width: "100%",
  },
});
