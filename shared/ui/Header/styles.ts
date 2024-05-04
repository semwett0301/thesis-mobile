import Constants from "expo-constants";
import { StyleSheet } from "react-native";

import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  headerText: {
    color: theme.color_text_base,
  },
  leftSide: {
    flex: 0,
  },
  rightSide: {
    flex: 0.3,
  },
  wrapper: {
    backgroundColor: theme.fill_primary,
    height: 45 + Constants.statusBarHeight,
    paddingTop: Constants.statusBarHeight,
    width: "100%",
  },
});
