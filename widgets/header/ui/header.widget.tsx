import { Button, Flex } from "@ant-design/react-native";
import { MenuPopover } from "features/menu-popover";
import { memo, useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { AccountIcon, BackIcon, CustomText } from "shared/ui/atoms";
import { styles } from "widgets/header/ui/styles";

interface Props {
  title?: string;
}

const HeaderNonMemo = ({ title }: Props) => {
  const navigation = useAppNavigation();

  const RightSide = useMemo(() => {
    return false ? (
      <Button
        size="small"
        type="ghost"
        style={styles.ghostButton}
        onPress={() => {
          navigation.navigate(PAGES.LOGIN);
        }}
      >
        Войти
      </Button>
    ) : (
      <MenuPopover>
        <TouchableOpacity>
          <AccountIcon />
        </TouchableOpacity>
      </MenuPopover>
    );
  }, [navigation]);

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
      <CustomText inverse style={styles.headerText}>
        {title}
      </CustomText>
      <View style={styles.rightSide}>
        {!navigation.canGoBack() && RightSide}
      </View>
    </Flex>
  );
};

export const Header = memo(HeaderNonMemo);
