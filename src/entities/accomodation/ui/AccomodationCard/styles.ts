import { StyleSheet } from "react-native";
import { theme } from "shared/theme";

export const styles = StyleSheet.create({
  bottomContainer: {
    gap: 12,
    width: "100%",
  },
  container: {
    backgroundColor: theme.fill_base,
    gap: 8,
    padding: 12,
    width: "100%",
  },
  contentContainer: {
    gap: 2,
  },
  distance: {
    color: theme.field_color_base,
    fontSize: theme.button_font_size_sm,
  },
  name: {
    fontSize: theme.button_font_size_sm,
    width: "100%",
  },
  price: {
    fontSize: theme.title_font_size,
    fontWeight: "bold",
  },
  rating: {
    fontSize: theme.font_size_icontext,
    fontWeight: "bold",
  },
  ratingContainer: {
    gap: 4,
  },
  reviews: {
    fontSize: theme.font_size_icontext,
  },
  source: {
    color: theme.field_color_base,
    fontSize: theme.button_font_size_sm,
  },
  subContainer: {
    width: "100%",
  },
});
