import { Provider } from "@ant-design/react-native";
import ruRU from "@ant-design/react-native/lib/locale-provider/ru_RU";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { CitySearchPage } from "pages/city-search";
import { LOGIN_PAGE_TITLE, LoginPage } from "pages/login";
import { REGISTER_PAGE_TITLE, RegisterPage } from "pages/register";
import { REQUEST_PAGE_TITLE, RequestPage } from "pages/request";
import { LogBox, View } from "react-native";
import { PAGES, ParamList } from "shared/router/types/pages";
import { theme } from "shared/theme/theme";
import { Header } from "widgets/header";

const { Navigator, Screen } = createStackNavigator<ParamList>();

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

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
          <Screen
            name={PAGES.CITY_SEARCH}
            component={CitySearchPage}
            options={({ route }) => ({
              title: route.params.title,
            })}
          />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
