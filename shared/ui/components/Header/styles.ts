import Constants from "expo-constants";
import { StyleSheet } from "react-native";

import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
  headerText: {
    color: theme.color_text_base,
    fontFamily: "Helvetica",
    fontSize: 17,
  },
  leftSide: {
    width: 58,
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
