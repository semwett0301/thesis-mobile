import React, { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native";
import { theme } from "shared/theme";

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.fill_body,
        height: "100%",
        width: "100%",
      }}
    >
      {children}
    </SafeAreaView>
  );
};
