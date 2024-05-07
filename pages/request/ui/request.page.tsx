import React from "react";
import { Page } from "shared/ui/layouts";
import { RouteGenerationForm } from "widgets/route-generation-form";

export const RequestPage = () => {
  return (
    <Page>
      <RouteGenerationForm />
    </Page>
  );
};
