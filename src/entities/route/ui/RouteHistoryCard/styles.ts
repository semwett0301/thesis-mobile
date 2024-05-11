import { StyleSheet } from "react-native";
import { theme } from "shared/theme";

export const styles = StyleSheet.create({
  cityText: {
    fontSize: theme.button_font_size_sm,
  },
  container: {
    backgroundColor: theme.fill_base,
    borderBottomWidth: 1,
    borderColor: theme.separator_color_base,
    borderTopWidth: 1,
    gap: 4,
    padding: 12,
    width: "100%",
  },
  dateText: {
    fontSize: 20,
    fontWeight: "700",
  },
});
