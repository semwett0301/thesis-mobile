import { Button, Flex } from "@ant-design/react-native";
import { memo } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

import { styles } from "./styles";

interface Props {
  title: string;
}

const HeaderNonMemo = ({ title }: Props) => {
  return (
    <Flex style={styles.wrapper} justify="between" align="center">
      <View style={styles.leftSide} />
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.rightSide}>
        <Button
          type="ghost"
          styles={{
            ghostRaw: {
              borderWidth: 0,
            },
          }}
        >
          Войти
        </Button>
      </View>
    </Flex>
  );
};

export const Header = memo(HeaderNonMemo);
