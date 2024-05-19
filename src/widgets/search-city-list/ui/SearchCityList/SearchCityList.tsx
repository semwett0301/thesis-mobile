import { Flex } from "@ant-design/react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { theme } from "shared/theme";
import { City } from "shared/types/api/City";
import { CustomText } from "shared/ui/atoms";
import { SearchInput } from "shared/ui/atoms/SearchInput";
import { Section } from "shared/ui/layouts";
import { useDebounce } from "use-debounce";

import { getCities } from "../../api";
import { styles } from "./styles";

type SearchListProps = {
  setCity: (city: City) => void;
};

const PAGE_SIZE = 10;

export const SearchCityList = ({ setCity }: SearchListProps) => {
  const [cities, setCities] = useState<City[]>([]);
  const [search, setSearch] = useState<string>("");

  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(1);

  const [isFirstPageLoaded, setIsFirstPageLoaded] = useState(false);

  const [debouncedSearch] = useDebounce(search, 300);

  const loadList = async (page: number) => {
    if (page <= total) {
      const { data } = await getCities({
        page,
        page_size: PAGE_SIZE,
        search: debouncedSearch,
      });

      if (!isFirstPageLoaded) setIsFirstPageLoaded(true);

      setCurrentPage(page + 1);
      setTotal(data.totalPages);
      setCities([...cities, ...data.content]);
    }
  };

  useEffect(() => {
    if (isFirstPageLoaded) {
      setCities([]);
      setCurrentPage(0);
    }
  }, [debouncedSearch]);

  return (
    <View>
      <Flex align="center" justify="center" style={styles.searchInputContainer}>
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholderTextColor={theme.input_color_icon}
          placeholder="Искать"
        />
      </Flex>
      <FlatList
        onEndReached={() => loadList(currentPage)}
        onEndReachedThreshold={0.5}
        keyExtractor={(item) => item.iata}
        ListFooterComponent={
          currentPage < total ? (
            <ActivityIndicator
              style={{ marginTop: 5 }}
              color={theme.brand_primary}
              size="large"
            />
          ) : null
        }
        renderItem={({ item }) => (
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
                  {item.name}
                </CustomText>
              </Flex>
            </TouchableOpacity>
          </Section>
        )}
        data={cities}
      />
    </View>
  );
};
