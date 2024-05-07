import { StackActions } from "@react-navigation/native";
import React from "react";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { Center, Page } from "shared/ui/layouts";
import { AuthForm } from "widgets/auth-form";

export const RegisterPage = () => {
  const navigation = useAppNavigation();

  return (
    <Page>
      <Center>
        <AuthForm
          submitButton={{
            onSubmit: () => {},
            placeholder: "Регистрация",
          }}
          additionalButton={{
            onPress: () =>
              navigation.dispatch(StackActions.replace(PAGES.LOGIN)),
            placeholder: "Вход",
          }}
        />
      </Center>
    </Page>
  );
};
