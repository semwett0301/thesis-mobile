import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { theme } from "shared/theme";

interface Props {
  mode?: "scroll" | "safe";
}

export const Page = ({
  children,
  mode = "scroll",
}: PropsWithChildren<Props>) => {
  return (
    <View>
      {mode === "scroll" ? (
        <ScrollView
          style={{
            backgroundColor: theme.fill_body,
            height: "100%",
            width: "100%",
          }}
        >
          {children}
        </ScrollView>
      ) : (
        <View
          style={{
            backgroundColor: theme.fill_body,
            height: "100%",
            width: "100%",
          }}
        >
          {children}
        </View>
      )}
    </View>
  );
};
