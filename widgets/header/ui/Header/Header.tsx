import { Button, Flex } from "@ant-design/react-native";
import { MenuPopover } from "features/menu-popover";
import { memo, useMemo } from "react";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { AccountIcon, BackIcon, CustomText } from "shared/ui/atoms";
import { styles } from "widgets/header/ui/Header/styles";

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
        <AccountIcon />
      </MenuPopover>
    );
  }, [navigation]);

  return (
    <Flex style={styles.wrapper} align="center">
      <Flex justify="start" style={styles.leftSide}>
        {navigation.canGoBack() && (
          <BackIcon
            onPress={() => {
              navigation.goBack();
            }}
          />
        )}
      </Flex>
      <CustomText inverse style={styles.headerText}>
        {title}
      </CustomText>
      <Flex justify="end" style={styles.rightSide}>
        {!navigation.canGoBack() && RightSide}
      </Flex>
    </Flex>
  );
};

export const Header = memo(HeaderNonMemo);
