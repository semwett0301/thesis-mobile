import { TextareaItem } from "@ant-design/react-native";
import { TextareaItemProps } from "@ant-design/react-native/es/textarea-item";
import React from "react";

export const CustomTextarea = ({ styles, ...props }: TextareaItemProps) => {
  return (
    <TextareaItem
      placeholderTextColor="#CCCCCC"
      styles={{
        container: {
          paddingTop: 12,
        },
        ...styles,
      }}
      last
      rows={6}
      {...props}
    />
  );
};
