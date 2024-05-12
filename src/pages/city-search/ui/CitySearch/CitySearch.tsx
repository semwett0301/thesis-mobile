import React from "react";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { useAppRoute } from "shared/router/hooks/useAppRoute";
import { PAGES } from "shared/router/types/pages";
import { Page } from "shared/ui/layouts";
import { SearchCityList } from "widgets/search-city-list";

export const CitySearch = () => {
  const {
    params: { setCity },
  } = useAppRoute<PAGES.CITY_SEARCH>();

  const navigation = useAppNavigation();

  return (
    <Page mode="safe">
      <SearchCityList
        setCity={(item) => {
          setCity(item);
          navigation.goBack();
        }}
      />
    </Page>
  );
};
