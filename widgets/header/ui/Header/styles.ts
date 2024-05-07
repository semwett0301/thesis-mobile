import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { theme } from "shared/theme";

export const styles = StyleSheet.create({
  ghostButton: {
    borderWidth: 0,
  },
  headerText: {
    fontSize: 17,
  },
  leftSide: {
    width: 58,
  },
  rightSide: {
    maxWidth: 58,
    paddingRight: 16,
  },
  wrapper: {
    backgroundColor: theme.fill_primary,
    height: 45 + Constants.statusBarHeight,
    paddingTop: Constants.statusBarHeight,
    width: "100%",
  },
});
