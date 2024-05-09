import { AuthChecker } from "entities/auth";
import React from "react";
import { Page } from "shared/ui/layouts";
import { RouteGenerationForm } from "widgets/route-generation-form";

export const Request = () => {
  return (
    <AuthChecker>
      <Page>
        <RouteGenerationForm />
      </Page>
    </AuthChecker>
  );
};
