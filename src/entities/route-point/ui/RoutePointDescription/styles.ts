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
  },
  divider: {
    height: 2,
  },
  link: {
    fontSize: theme.button_font_size_sm,
  },
  linkContainer: {
    color: theme.field_color_base,
    gap: 6,
  },
  title: {
    fontSize: theme.title_font_size,
  },
});
