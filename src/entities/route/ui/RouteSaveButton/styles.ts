import { StyleSheet } from "react-native";
import { theme } from "shared/theme";

export const styles = StyleSheet.create({
  button: {
    height: 40,
    width: "100%",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
  },
  container: {
    backgroundColor: theme.fill_base,
    padding: 20,
    width: "100%",
  },
});
