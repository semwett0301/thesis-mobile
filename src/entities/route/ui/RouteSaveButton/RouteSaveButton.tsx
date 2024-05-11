import { Button } from "@ant-design/react-native";
import React from "react";
import { View } from "react-native";

import { ROUTE_SAVE_PLACEHOLDER } from "../../config";
import { styles } from "./styles";

export const RouteSaveButton = () => {
  return (
    <View style={styles.container}>
      <Button
        styles={{
          container: styles.button,
          primaryRawText: styles.buttonText,
        }}
      >
        {ROUTE_SAVE_PLACEHOLDER}
      </Button>
    </View>
  );
};
