import { StyleSheet } from "react-native";
import { theme } from "shared/theme";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    height: 100,
    paddingLeft: 12,
    paddingRight: 12,
    width: 150,
  },
  itemWrapper: {
    flex: 1,
  },
  menuText: {
    fontSize: 17,
  },
  separator: {
    backgroundColor: theme.separator_color_base,
    height: 1,
    width: "100%",
  },
  touchableContainer: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
});
