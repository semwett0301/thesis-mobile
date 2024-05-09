import { Button, DatePicker, Flex } from "@ant-design/react-native";
import { addDays, compareAsc, compareDesc } from "date-fns";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { useAppNavigation } from "shared/router/hooks/useAppNavigation";
import { PAGES } from "shared/router/types/pages";
import { RouteRequest } from "shared/types/api/request/RouteRequest";
import { CityResponse } from "shared/types/api/response/CityResponse";
import { ErrorMessage, SelectItem } from "shared/ui/atoms";
import { CustomInput } from "shared/ui/atoms/CustomInput";
import { CustomTextarea } from "shared/ui/atoms/CustomTextarea";
import { Section } from "shared/ui/layouts";
import { toRussianDate } from "shared/utils/date";
import { config } from "widgets/route-generation-form/config";
import { styles } from "widgets/route-generation-form/ui/RouteGenerationForm/styles";

export const RouteGenerationForm = () => {
  const navigation = useAppNavigation();

  const {
    control,
    formState: { isValid },
    // handleSubmit,
    setValue,
    watch,
  } = useForm<Partial<RouteRequest>>({
    mode: "all",
  });

  const startDate = watch("start_date");
  const endDate = watch("end_date");

  const chooseCity = (title: string, setCity: (city: CityResponse) => void) => {
    navigation.navigate(PAGES.CITY_SEARCH, {
      setCity,
      title,
    });
  };

  return (
    <View>
      <Section label="Отправление">
        <Flex>
          <Controller
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <SelectItem
                style={styles.selectItem}
                onPress={() => chooseCity("Откуда", onChange)}
              >
                {value?.title ?? config.from_label}
              </SelectItem>
            )}
            name="start_city"
            control={control}
          />
          <Controller
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <SelectItem
                style={styles.selectItem}
                onPress={() => {
                  chooseCity("Куда", onChange);
                }}
              >
                {value?.title ?? config.to_label}
              </SelectItem>
            )}
            name="end_city"
            control={control}
          />
        </Flex>
      </Section>
      <Section label="Даты поездки">
        <Flex>
          <Controller
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                value={value}
                onChange={(date) => {
                  if (endDate && compareAsc(date, endDate) >= 0)
                    setValue("end_date", undefined);
                  onChange(date);
                }}
                minDate={new Date()}
              >
                <SelectItem style={styles.selectItem}>
                  {value ? toRussianDate(value) : config.when_label}
                </SelectItem>
              </DatePicker>
            )}
            name="start_date"
            control={control}
          />
          <Controller
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                onChange={(date) => {
                  if (startDate && compareDesc(date, startDate) >= 0)
                    setValue("start_date", undefined);
                  onChange(date);
                }}
                value={value}
                minDate={addDays(new Date(), 1)}
              >
                <SelectItem style={styles.selectItem}>
                  {value ? toRussianDate(value) : config.return_label}
                </SelectItem>
              </DatePicker>
            )}
            name="end_date"
            control={control}
          />
        </Flex>
      </Section>
      <Section label="Суммы">
        <Controller
          rules={{
            min: { message: "Мин. 5000", value: 5000 },
            required: true,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <CustomInput
              value={`${value ?? ""}`}
              onChange={(e) => onChange(+e)}
              type="number"
              placeholder="Сумма на транспорт (от 5000)"
              extra={error && <ErrorMessage>{error.message}</ErrorMessage>}
            />
          )}
          name="transport_price"
          control={control}
        />
        <Controller
          rules={{
            min: { message: "Мин. 5000", value: 5000 },
            required: true,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <CustomInput
              value={`${value ?? ""}`}
              onChange={(e) => onChange(+e)}
              type="number"
              placeholder="Сумма на проживание (от 5000)"
              extra={error && <ErrorMessage>{error.message}</ErrorMessage>}
            />
          )}
          name="accommodation_price"
          control={control}
        />
      </Section>
      <Section label="Общие пожелания" last={false}>
        <Controller
          render={({ field: { onChange, value } }) => (
            <CustomTextarea
              value={value}
              onChange={onChange}
              placeholder="Опишите ваши пожелания от поездки"
            />
          )}
          name="additional_information"
          control={control}
        />
      </Section>
      <View style={styles.buttonWrapper}>
        <Button disabled={!isValid} style={styles.button} type="primary">
          Сгенерировать
        </Button>
      </View>
    </View>
  );
};
