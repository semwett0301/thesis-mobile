import { Button, Flex, Popover } from "@ant-design/react-native";
import { memo, useMemo } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

import { useAppNavigation } from "../../../shared/router/hooks/useAppNavigation";
import { PAGES } from "../../../shared/router/types/pages";
import { AccountIcon, BackIcon, CustomText } from "../../../shared/ui/atoms";
import { styles } from "./styles";

interface Props {
  title?: string;
}

const HeaderNonMemo = ({ title }: Props) => {
  const navigation = useAppNavigation();

  const popoverOverlay = useMemo(
    () => [
      <Popover.Item key={1} value="1">
        <Text style={styles.menuText}>Маршруты</Text>
      </Popover.Item>,
      <Popover.Item key={2} value="2">
        <Text style={styles.menuText}>Выход</Text>
      </Popover.Item>,
    ],
    [],
  );

  const RightSide = useMemo(() => {
    return true ? (
      <Button
        size="small"
        type="ghost"
        styles={{
          ghostRaw: {
            borderWidth: 0,
          },
        }}
        onPress={() => {
          navigation.navigate(PAGES.LOGIN);
        }}
      >
        Войти
      </Button>
    ) : (
      <Popover placement="auto" overlay={popoverOverlay}>
        <AccountIcon />
      </Popover>
    );
  }, [navigation, popoverOverlay]);

  return (
    <Flex style={styles.wrapper} justify="between" align="center">
      <View style={styles.leftSide}>
        {navigation.canGoBack() && (
          <BackIcon
            onPress={() => {
              navigation.goBack();
            }}
          />
        )}
      </View>
      <CustomText style={styles.headerText}>{title}</CustomText>
      <View style={styles.rightSide}>
        {!navigation.canGoBack() && RightSide}
      </View>
    </Flex>
  );
};

export const Header = memo(HeaderNonMemo);
