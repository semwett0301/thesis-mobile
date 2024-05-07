import { StyleSheet } from "react-native";
import { theme } from "shared/theme";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
  },
  buttonWrapper: {
    gap: 8,
    paddingLeft: 12,
    paddingRight: 12,
    width: "100%",
  },
  input: {
    width: "100%",
  },
  inputWrapper: {
    backgroundColor: theme.color_text_base_inverse,
    width: "100%",
  },
  wrapper: {
    gap: 32,
    width: "100%",
  },
});
