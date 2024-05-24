import { StackActions } from "@react-navigation/native";
import { AuthChecker, useAuth } from "entities/auth";
import React from "react";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { Center } from "shared/ui/layouts";
import { AuthForm } from "widgets/auth-form";

export const Register = () => {
  const navigation = useAppNavigation();

  const { register } = useAuth();

  return (
    <AuthChecker mode="not-auth">
      <Center>
        <AuthForm
          submitButton={{
            onSubmit: async (auth) => {
              await register(auth);
              navigation.goBack();
            },
            placeholder: "Регистрация",
          }}
          additionalButton={{
            onPress: () =>
              navigation.dispatch(StackActions.replace(PAGES.LOGIN)),
            placeholder: "Вход",
          }}
        />
      </Center>
    </AuthChecker>
  );
};
