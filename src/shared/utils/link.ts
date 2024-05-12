import { Toast } from "@ant-design/react-native";
import { Linking } from "react-native";

export const openLink = async (link?: string) => {
  if (link) {
    const supported = await Linking.canOpenURL(link);

    if (supported) {
      await Linking.openURL(link);
    } else {
      Toast.fail(`Don't know how to open this URL: ${link}`);
    }
  }
};
