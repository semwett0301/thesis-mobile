import React, { PropsWithChildren } from "react";
import { Text } from "react-native-elements";
import { theme } from "shared/theme";

export const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <Text
      style={{
        color: theme.brand_error,
      }}
    >
      {children}
    </Text>
  );
};
