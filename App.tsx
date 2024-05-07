import { Provider } from "@ant-design/react-native";
import ruRU from "@ant-design/react-native/lib/locale-provider/ru_RU";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { CitySearch } from "pages/city-search";
import { Login, LOGIN_PAGE_TITLE } from "pages/login";
import { Register, REGISTER_PAGE_TITLE } from "pages/register";
import { Request, REQUEST_PAGE_TITLE } from "pages/request";
import { Routes, ROUTES_PAGE_TITLE } from "pages/routes";
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
            component={Request}
            options={{
              title: REQUEST_PAGE_TITLE,
            }}
          />
          <Screen
            name={PAGES.LOGIN}
            component={Login}
            options={{
              title: LOGIN_PAGE_TITLE,
            }}
          />
          <Screen
            name={PAGES.REGISTER}
            component={Register}
            options={{
              title: REGISTER_PAGE_TITLE,
            }}
          />
          <Screen
            name={PAGES.ROUTES}
            component={Routes}
            options={{
              title: ROUTES_PAGE_TITLE,
            }}
          />
          <Screen
            name={PAGES.CITY_SEARCH}
            component={CitySearch}
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
