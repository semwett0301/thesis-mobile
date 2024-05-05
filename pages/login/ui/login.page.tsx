import { StackActions } from "@react-navigation/native";
import React from "react";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { PageLayout } from "shared/ui/layouts";
import { CenterLayout } from "shared/ui/layouts/CenterLayout";
import { AuthForm } from "widgets/auth-form";

export const LoginPage = () => {
  const navigation = useAppNavigation();

  return (
    <PageLayout>
      <CenterLayout>
        <AuthForm
          submitButton={{
            onSubmit: () => {},
            placeholder: "Вход",
          }}
          additionalButton={{
            onPress: () =>
              navigation.dispatch(StackActions.replace(PAGES.REGISTER)),
            placeholder: "Регистрация",
          }}
        />
      </CenterLayout>
    </PageLayout>
  );
};
