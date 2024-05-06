import { Provider } from "@ant-design/react-native";
import ruRU from "@ant-design/react-native/lib/locale-provider/ru_RU";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Header } from "features/header";
import { LOGIN_PAGE_TITLE, LoginPage } from "pages/login";
import { REGISTER_PAGE_TITLE, RegisterPage } from "pages/register";
import { REQUEST_PAGE_TITLE, RequestPage } from "pages/request";
import { View } from "react-native";
import { PAGES } from "shared/router/types/pages";
import { theme } from "shared/theme/theme";

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Helvetica: require("./shared/assets/fonts/HelveticaNeue.ttf"),
    antfill: require("./shared/assets/fonts/HelveticaNeue.ttf"),
    antoutline: require("./shared/assets/fonts/HelveticaNeue.ttf"),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <Provider theme={theme} locale={ruRU}>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            header: ({ options: { title } }) => <Header title={title} />,
          }}
        >
          <Screen
            name={PAGES.REQUEST}
            component={RequestPage}
            options={{
              title: REQUEST_PAGE_TITLE,
            }}
          />
          <Screen
            name={PAGES.LOGIN}
            component={LoginPage}
            options={{
              title: LOGIN_PAGE_TITLE,
            }}
          />
          <Screen
            name={PAGES.REGISTER}
            component={RegisterPage}
            options={{
              title: REGISTER_PAGE_TITLE,
            }}
          />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
