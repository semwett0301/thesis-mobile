import { Text } from "@rneui/base";
import React, { PropsWithChildren } from "react";
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
