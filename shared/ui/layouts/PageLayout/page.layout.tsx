import React, { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native";
import { theme } from "shared/theme";

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.background_color,
        height: "100%",
        width: "100%",
      }}
    >
      {children}
    </SafeAreaView>
  );
};
