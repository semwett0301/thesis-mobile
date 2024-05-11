import { Button, Flex } from "@ant-design/react-native";
import React from "react";

import { ROUTE_SAVE_PLACEHOLDER } from "../../config";
import { styles } from "./styles";

export const RouteSaveButton = () => {
  return (
    <Flex justify="center" align="center" style={styles.container}>
      <Button type="primary" style={styles.button}>
        {ROUTE_SAVE_PLACEHOLDER}
      </Button>
    </Flex>
  );
};
