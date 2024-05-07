import { Flex, InputItem, ListView } from "@ant-design/react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { useAppRoute } from "shared/router/hooks/useAppRoute";
import { PAGES } from "shared/router/types/pages";
import { theme } from "shared/theme";
import { CityResponse } from "shared/types/api/response/CityResponse";
import { CustomText } from "shared/ui/atoms";
import { Page } from "shared/ui/layouts";
import Field from "shared/ui/layouts/Field/field.layout";

export const CitySearchPage = () => {
  const {
    params: { setCity },
  } = useAppRoute<PAGES.CITY_SEARCH>();

  const navigation = useAppNavigation();

  return (
    <Page>
      <Flex
        align="center"
        justify="center"
        style={{
          backgroundColor: theme.fill_base,
          padding: 12,
          width: "100%",
        }}
      >
        <Flex
          align="center"
          style={{
            backgroundColor: theme.search_bar_fill_input,
            borderRadius: 5,
            gap: 5,
            paddingLeft: 10,
            width: "100%",
          }}
        >
          <Icon
            size={16}
            color={theme.input_color_icon}
            type="feather"
            name="search"
          />
          <InputItem
            styles={{
              container: {
                flex: 1,
                marginLeft: 0,
              },
              input: {
                fontSize: 17,
              },
            }}
            editable
            placeholderTextColor={theme.input_color_icon}
            placeholder="Искать"
          />
        </Flex>
      </Flex>
      <ListView
        onFetch={(currentPage, startFetch) => {
          startFetch([{ title: "dadsa" }, { title: "dsaxzv" }], 10);
        }}
        allLoadedText=""
        renderItem={(item: CityResponse) => (
          <View>
            <Field>
              <TouchableOpacity
                onPress={() => {
                  setCity(item);
                  navigation.goBack();
                }}
              >
                <Flex
                  align="center"
                  style={{
                    height: 50,
                    paddingLeft: 10,
                  }}
                >
                  <CustomText
                    style={{
                      fontSize: 17,
                    }}
                  >
                    {item.title}
                  </CustomText>
                </Flex>
              </TouchableOpacity>
            </Field>
          </View>
        )}
        numColumns={1}
      />
    </Page>
  );
};
