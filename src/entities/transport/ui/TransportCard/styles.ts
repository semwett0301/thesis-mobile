import { StyleSheet } from "react-native";
import { theme } from "shared/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.fill_base,
    height: 104,
    padding: 12,
    width: "100%",
  },
  contentContainer: {
    width: "100%",
  },
  logo: {
    height: 24,
    width: 24,
  },
  logoContainer: {
    height: "100%",
    paddingRight: 14,
  },
  point: {
    color: theme.field_color_base,
    fontSize: theme.font_size_icontext,
  },
  price: {
    fontSize: theme.title_font_size,
    fontWeight: "bold",
  },
  source: {
    color: theme.field_color_base,
    fontSize: theme.button_font_size_sm,
  },
  text: {
    fontSize: theme.button_font_size_sm,
  },
  textContainer: {
    gap: 5,
  },
});
