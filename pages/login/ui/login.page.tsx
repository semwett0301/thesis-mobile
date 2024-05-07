import { StackActions } from "@react-navigation/native";
import React from "react";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { Page } from "shared/ui/layouts";
import { Center } from "shared/ui/layouts/Center";
import { AuthForm } from "widgets/auth-form";

export const LoginPage = () => {
  const navigation = useAppNavigation();

  return (
    <Page>
      <Center>
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
      </Center>
    </Page>
  );
};
