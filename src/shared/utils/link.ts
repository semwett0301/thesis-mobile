import { Linking } from "react-native";

export const openLink = async (link?: string) => {
  if (link) {
    await Linking.openURL(link);
  }
};
