import React, { PropsWithChildren } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { theme } from "shared/theme";

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView
      style={{
        backgroundColor: theme.fill_body,
        height: "100%",
        width: "100%",
      }}
    >
      {children}
    </ScrollView>
  );
};
