import { Text, TextProps } from "@rneui/base";
import React from "react";
import { theme } from "shared/theme";

export const CustomText = ({
  children,
  inverse = false,
  style,
  ...rest
}: TextProps & {
  inverse?: boolean;
}) => {
  return (
    <Text
      style={{
        color: inverse ? theme.color_text_base_inverse : theme.color_text_base,
        // fontFamily: theme.main_font,
        ...(style as object),
      }}
      {...rest}
    >
      {children}
    </Text>
  );
};
