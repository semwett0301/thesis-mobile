import { StyleSheet } from "react-native";
import { theme } from "shared/theme";

export const styles = StyleSheet.create({
  button_container: {
    width: "100%",
  },
  button_info: {
    fontSize: theme.button_font_size_sm,
  },
  container: {
    height: "100%",
    padding: 12,
    width: "100%",
  },
  count_info: {
    fontSize: theme.font_size_base,
    fontWeight: "bold",
    marginTop: 6,
  },
  info: {
    fontSize: theme.title_font_size,
  },
});
