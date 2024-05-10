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
    fontSize: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  source: {
    color: theme.field_color_base,
    fontSize: 13,
  },
  text: {
    fontSize: 13,
  },
  textContainer: {
    gap: 5,
  },
});
