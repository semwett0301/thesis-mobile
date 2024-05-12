import { StyleSheet } from "react-native";
import { theme } from "shared/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.fill_base,
    gap: 12,
    height: 200,
    padding: 12,
    width: "100%",
  },
  content: {
    fontSize: theme.button_font_size_sm,
  },
  date: {
    fontSize: theme.title_font_size,
    fontWeight: "bold",
  },
  description: {
    fontSize: theme.font_size_icontext,
  },
  divider: {
    height: 2,
  },
  link: {
    color: theme.fill_primary,
    fontSize: theme.button_font_size_sm,
    textDecorationLine: "underline",
  },
  linkContainer: {
    gap: 6,
  },
  subContainer: {
    width: "100%",
  },
});
