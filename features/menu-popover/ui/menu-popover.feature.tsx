import { Flex } from "@ant-design/react-native";
import { PropsWithChildren } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import Popover from "react-native-popover-view";
import { Placement } from "react-native-popover-view/src/Types";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { CustomText } from "shared/ui/atoms";

import { styles } from "./styles";

const arrowShift = Platform.select({
  android: -0.05,
  ios: 0,
  web: 0,
});

const verticalOffset = Platform.select({
  android: -35,
  ios: 0,
  web: 0,
});

export const MenuPopover = ({ children }: PropsWithChildren) => {
  const navigation = useAppNavigation();

  const goToRoutes = () => {
    navigation.navigate(PAGES.ROUTES);
  };

  return (
    <Popover
      placement={[Placement.RIGHT, Placement.BOTTOM]}
      arrowShift={arrowShift}
      verticalOffset={verticalOffset}
      from={children}
    >
      <Flex direction="column" style={styles.container}>
        <TouchableOpacity
          onPress={goToRoutes}
          style={styles.touchableContainer}
        >
          <Flex align="center" style={styles.itemWrapper}>
            <CustomText style={styles.menuText}>Маршруты</CustomText>
          </Flex>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.touchableContainer}>
          <Flex align="center" style={styles.itemWrapper}>
            <CustomText style={styles.menuText}>Выход</CustomText>
          </Flex>
        </TouchableOpacity>
      </Flex>
    </Popover>
  );
};
