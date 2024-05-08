import { Flex, ListView } from "@ant-design/react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { theme } from "shared/theme";
import { CityResponse } from "shared/types/api/response/CityResponse";
import { CustomText } from "shared/ui/atoms";
import { SearchInput } from "shared/ui/atoms/SearchInput";
import { Section } from "shared/ui/layouts";
import { styles } from "widgets/search-city-list/ui/SearchCityList/styles";

type SearchListProps = {
  setCity: (city: CityResponse) => void;
};

export const SearchCityList = ({ setCity }: SearchListProps) => {
  return (
    <View>
      <Flex align="center" justify="center" style={styles.searchInputContainer}>
        <SearchInput
          placeholderTextColor={theme.input_color_icon}
          placeholder="Искать"
        />
      </Flex>
      <ListView
        onFetch={(currentPage, startFetch) => {
          startFetch([{ title: "dadsa" }, { title: "dsaxzv" }], 10);
        }}
        allLoadedText=""
        renderItem={(item: CityResponse) => (
          <Section>
            <TouchableOpacity
              onPress={() => {
                setCity(item);
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
          </Section>
        )}
      />
    </View>
  );
};
