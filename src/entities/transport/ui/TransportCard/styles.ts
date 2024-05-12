import { StyleSheet } from "react-native";
import { theme } from "shared/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.fill_base,
    height: 104,
    padding: 12,
    width: "100%",
  },
  content: {
    alignSelf: "stretch",
  },
  contentContainer: {
    flex: 1,
    gap: 3,
  },
  logo: {
    borderRadius: 24,
    height: 24,
    width: 24,
  },
  logoContainer: {
    height: "100%",
    paddingRight: 12,
    width: 48,
  },
  point: {
    color: theme.field_color_base,
    fontSize: theme.font_size_icontext,
    width: "100%",
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
    alignSelf: "stretch",
  },
});
