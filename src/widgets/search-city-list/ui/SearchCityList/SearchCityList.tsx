import { Flex, ListView } from "@ant-design/react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { theme } from "shared/theme";
import { CustomText } from "shared/ui/atoms";
import { SearchInput } from "shared/ui/atoms/SearchInput";
import { Section } from "shared/ui/layouts";
import { styles } from "widgets/search-city-list/ui/SearchCityList/styles";

import { City } from "../../../../shared/types/api/City";

type SearchListProps = {
  setCity: (city: City) => void;
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
          startFetch(
            [
              { id: 1, title: "dadsa" },
              { id: 2, title: "dsaxzv" },
            ],
            10,
          );
        }}
        allLoadedText=""
        renderItem={(item: City) => (
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
                    fontSize: theme.button_font_size,
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
