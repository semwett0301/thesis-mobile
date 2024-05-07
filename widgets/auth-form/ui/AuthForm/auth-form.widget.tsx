import { Button, Flex, InputItem } from "@ant-design/react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { UserRequest } from "shared/types/api/request/UserRequest";
import { ErrorMessage } from "shared/ui/atoms";
import Field from "shared/ui/layouts/Field/field.layout";
import { styles } from "widgets/auth-form/ui/AuthForm/styles";

interface Props {
  submitButton: {
    placeholder: string;
    onSubmit: (data: UserRequest) => void;
  };
  additionalButton?: {
    placeholder: string;
    onPress: () => void;
  };
}

export const AuthForm = ({ additionalButton, submitButton }: Props) => {
  const {
    control,
    formState: { isSubmitted, isValid },
    handleSubmit,
  } = useForm<UserRequest>({
    mode: "all",
  });

  return (
    <Flex direction="column" style={styles.wrapper}>
      <Flex direction="column" style={styles.inputWrapper}>
        <Field>
          <Controller
            control={control}
            rules={{
              required: "Поле обязательно",
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputItem
                styles={{
                  container: styles.input,
                }}
                editable
                placeholder="Введите логин"
                value={value}
                onChange={onChange}
                extra={error && <ErrorMessage>{error.message}</ErrorMessage>}
              >
                Логин
              </InputItem>
            )}
            name="username"
          />
          <Controller
            control={control}
            rules={{
              required: "Поле обязательно",
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputItem
                styles={{
                  container: styles.input,
                }}
                placeholder="Введите пароль"
                type="password"
                value={value}
                onChange={onChange}
                extra={error && <ErrorMessage>{error.message}</ErrorMessage>}
                last
              >
                Пароль
              </InputItem>
            )}
            name="password"
          />
        </Field>
      </Flex>
      <Flex direction="column" style={styles.buttonWrapper}>
        <Button
          disabled={!isValid && isSubmitted}
          style={styles.button}
          type="primary"
          onPress={handleSubmit(submitButton.onSubmit)}
        >
          {submitButton.placeholder}
        </Button>
        {additionalButton && (
          <Button style={styles.button} onPress={additionalButton.onPress}>
            {additionalButton.placeholder}
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
