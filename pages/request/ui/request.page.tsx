import {
  Button,
  DatePicker,
  Flex,
  InputItem,
  TextareaItem,
} from "@ant-design/react-native";
import React, { useState } from "react";
import { View } from "react-native";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { CityResponse } from "shared/types/api/response/CityResponse";
import { SelectItem } from "shared/ui/atoms";
import { Page } from "shared/ui/layouts";
import Field from "shared/ui/layouts/Field/field.layout";

export const RequestPage = () => {
  const navigation = useAppNavigation();

  const [from, setFrom] = useState<CityResponse | null>(null);
  const [to, setTo] = useState<CityResponse | null>(null);

  const chooseCity = (title: string, setCity: (city: CityResponse) => void) => {
    navigation.navigate(PAGES.CITY_SEARCH, {
      setCity,
      title,
    });
  };

  return (
    <Page>
      <Flex
        direction="column"
        style={{
          width: "100%",
        }}
      >
        <Field label="Отправление">
          <Flex align="center">
            <Flex
              style={{
                width: "50%",
              }}
              justify="center"
            >
              <SelectItem onPress={() => chooseCity("Откуда", setFrom)}>
                {from?.title ?? "Откуда"}
              </SelectItem>
            </Flex>
            <Flex
              style={{
                width: "50%",
              }}
              justify="center"
            >
              <SelectItem
                onPress={() => {
                  chooseCity("Куда", setTo);
                }}
              >
                {to?.title ?? "Куда"}
              </SelectItem>
            </Flex>
          </Flex>
        </Field>
        <Field label="Даты поездки">
          <Flex align="center">
            <Flex
              style={{
                width: "50%",
              }}
              justify="center"
            >
              <DatePicker>
                <SelectItem>Когда</SelectItem>
              </DatePicker>
            </Flex>
            <Flex
              style={{
                width: "50%",
              }}
              justify="center"
            >
              <DatePicker>
                <SelectItem>Обратно</SelectItem>
              </DatePicker>
            </Flex>
          </Flex>
        </Field>
        <Field label="Суммы">
          <InputItem
            placeholderTextColor="#CCCCCC"
            type="number"
            placeholder="Сумма на транспорт"
          />
          <InputItem
            placeholderTextColor="#CCCCCC"
            type="number"
            placeholder="Сумма на проживание"
            last
          />
        </Field>
        <Field label="Общие пожелания" last={false}>
          <TextareaItem
            placeholderTextColor="#CCCCCC"
            styles={{
              container: {
                paddingTop: 12,
              },
            }}
            last
            placeholder="Опишите ваши пожелания от поездки"
            rows={4}
          />
        </Field>
        <View
          style={{
            marginTop: 30,
            paddingLeft: 12,
            paddingRight: 12,
            width: "100%",
          }}
        >
          <Button
            style={{
              width: "100%",
            }}
            type="primary"
          >
            Сгенерировать
          </Button>
        </View>
      </Flex>
    </Page>
  );
};
