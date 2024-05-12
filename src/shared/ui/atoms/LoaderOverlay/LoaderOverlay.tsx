import { Flex } from "@ant-design/react-native";
import { Overlay, OverlayProps } from "@rneui/base";
import { ActivityIndicator } from "react-native";

import { theme } from "../../../theme";

export const LoaderOverlay = ({
  overlayStyle,
  ...props
}: Omit<OverlayProps, "children">) => (
  <Overlay
    overlayStyle={{
      backgroundColor: theme.border_color_base,
      width: "100%",
      ...(overlayStyle as object),
    }}
    fullScreen
    {...props}
  >
    <Flex
      align="center"
      justify="center"
      style={{
        backgroundColor: theme.border_color_base,
        height: "100%",
        width: "100%",
      }}
    >
      <ActivityIndicator color={theme.fill_base} size={64} />
    </Flex>
  </Overlay>
);
