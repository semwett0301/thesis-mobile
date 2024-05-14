import { Button, Flex } from "@ant-design/react-native";
import React from "react";

import { saveRoute } from "../../api";
import { ROUTE_SAVE_PLACEHOLDER } from "../../config";
import { useRoute } from "../../hooks";
import { styles } from "./styles";

export const RouteSaveButton = () => {
  const { route, setRoute } = useRoute();

  const save = async () => {
    if (route) {
      const { data } = await saveRoute(route.id);
      setRoute(data);
    }
  };

  return (
    <Flex justify="center" align="center" style={styles.container}>
      <Button onPress={save} type="primary" style={styles.button}>
        {ROUTE_SAVE_PLACEHOLDER}
      </Button>
    </Flex>
  );
};
