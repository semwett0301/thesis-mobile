import { InputItem } from "@ant-design/react-native";
import { InputItemProps } from "@ant-design/react-native/es/input-item";
import React from "react";

export const CustomInput = ({ style, ...props }: InputItemProps) => {
  return (
    <InputItem
      placeholderTextColor="#CCCCCC"
      style={{
        height: 50,
        ...(style as object),
      }}
      {...props}
    />
  );
};
