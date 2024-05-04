import { Provider } from "@ant-design/react-native";
import ruRU from "@ant-design/react-native/lib/locale-provider/ru_RU";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { REQUEST_PAGE_TITLE, RequestPage } from "./pages/request";
import { PAGES } from "./shared/router/pages";
import { theme } from "./shared/theme/theme";
import { Header } from "./shared/ui";

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <Provider theme={theme} locale={ruRU}>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            header: () => <Header title={REQUEST_PAGE_TITLE} />,
          }}
        >
          <Screen name={PAGES.REQUEST} component={RequestPage} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
