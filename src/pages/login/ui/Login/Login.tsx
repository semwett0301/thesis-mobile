import { StackActions } from "@react-navigation/native";
import { AuthChecker, useAuth } from "entities/auth";
import React from "react";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { Center } from "shared/ui/layouts/Center";
import { AuthForm } from "widgets/auth-form";

export const Login = () => {
  const navigation = useAppNavigation();

  const { login } = useAuth();

  return (
    <AuthChecker mode="not-auth">
      <Center>
        <AuthForm
          submitButton={{
            onSubmit: async (auth) => {
              await login(auth);
              navigation.goBack();
            },
            placeholder: "Вход",
          }}
          additionalButton={{
            onPress: () =>
              navigation.dispatch(StackActions.replace(PAGES.REGISTER)),
            placeholder: "Регистрация",
          }}
        />
      </Center>
    </AuthChecker>
  );
};
