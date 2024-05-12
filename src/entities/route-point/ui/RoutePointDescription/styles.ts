import { StyleSheet } from "react-native";
import { theme } from "shared/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.fill_base,
    gap: 10,
    padding: 12,
    width: "100%",
  },
  description: {
    fontSize: theme.font_size_icontext,
    width: "100%",
  },
  divider: {
    height: 4,
    width: "100%",
  },
  icon: {
    width: "auto",
  },
  iconLink: {
    color: theme.fill_primary,
    position: "relative",
    top: 2.5,
  },
  link: {
    color: theme.field_color_base,
    fontSize: theme.button_font_size_sm,
    padding: 5,
    verticalAlign: "bottom",
  },
  linkContainer: {
    width: "100%",
  },
  title: {
    fontSize: theme.title_font_size,
    fontWeight: "bold",
    width: "100%",
  },
});
