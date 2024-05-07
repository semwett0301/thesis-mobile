import { Flex } from "@ant-design/react-native";
import React, { PropsWithChildren } from "react";

export const Center = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      align="center"
      justify="center"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      {children}
    </Flex>
  );
};
