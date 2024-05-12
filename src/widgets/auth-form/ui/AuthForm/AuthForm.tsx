import { Button, Flex } from "@ant-design/react-native";
import { AuthRequest } from "entities/auth";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "shared/ui/atoms";
import { CustomInput } from "shared/ui/atoms/CustomInput";
import { Section } from "shared/ui/layouts";
import { styles } from "widgets/auth-form/ui/AuthForm/styles";

interface Props {
  submitButton: {
    placeholder: string;
    onSubmit: (data: AuthRequest) => void;
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
  } = useForm<AuthRequest>({
    mode: "all",
  });

  return (
    <Flex direction="column" style={styles.wrapper}>
      <Flex direction="column" style={styles.inputWrapper}>
        <Section>
          <Controller
            control={control}
            rules={{
              required: "Поле обязательно",
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <CustomInput
                styles={{
                  container: styles.input,
                }}
                placeholder="Введите логин"
                value={value}
                onChange={onChange}
                extra={error && <ErrorMessage>{error.message}</ErrorMessage>}
              >
                Логин
              </CustomInput>
            )}
            name="username"
          />
          <Controller
            control={control}
            rules={{
              required: "Поле обязательно",
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <CustomInput
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
              </CustomInput>
            )}
            name="password"
          />
        </Section>
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
