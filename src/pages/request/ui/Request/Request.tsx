import { useRoute } from "entities/route";
import React, { useState } from "react";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { LoaderOverlay } from "shared/ui/atoms/LoaderOverlay/LoaderOverlay";
import { Page } from "shared/ui/layouts";
import {
  RouteGenerationForm,
  RouteRequest,
} from "widgets/route-generation-form";

import { createRoute } from "../../api";

export const Request = () => {
  const navigation = useAppNavigation();

  const { setRoute } = useRoute();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (form: RouteRequest) => {
    setIsLoading(true);
    const { data } = await createRoute(form);
    setRoute(data);
    navigation.navigate(PAGES.ROUTE_INFO);
    setIsLoading(false);
  };

  return (
    <Page>
      <RouteGenerationForm disabled={isLoading} onSubmit={onSubmit} />
      <LoaderOverlay isVisible={isLoading} />
    </Page>
  );
};
