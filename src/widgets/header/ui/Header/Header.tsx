import { Button, Flex } from "@ant-design/react-native";
import { useAuth } from "entities/auth";
import { MenuPopover } from "features/menu-popover";
import { memo, useMemo } from "react";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { useAppRoute } from "shared/router/hooks/useAppRoute";
import { PAGES } from "shared/router/types/pages";
import { AccountIcon, BackIcon, CustomText } from "shared/ui/atoms";
import { styles } from "widgets/header/ui/Header/styles";

interface Props {
  title?: string;
}

const HeaderNonMemo = ({ title }: Props) => {
  const navigation = useAppNavigation();
  const { name } = useAppRoute();

  const { isAuth } = useAuth();

  const RightSide = useMemo(() => {
    return !isAuth ? (
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
  }, [isAuth, navigation]);

  return (
    <Flex style={styles.wrapper} align="center">
      <Flex justify="start" style={styles.leftSide}>
        {name !== PAGES.REQUEST && (
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
        {name === PAGES.REQUEST && RightSide}
      </Flex>
    </Flex>
  );
};

export const Header = memo(HeaderNonMemo);
