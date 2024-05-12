import { Carousel } from "@ant-design/react-native";
import { CarouselProps } from "@ant-design/react-native/es/carousel";
import React from "react";

import { theme } from "../../../theme";

export const CustomCarousel = ({
  children,
  infinite = true,
  ...props
}: CarouselProps) => {
  return (
    <Carousel
      styles={{
        pointActiveStyle: {
          backgroundColor: theme.brand_primary_tap,
          height: 3,
          width: 15,
        },
        pointStyle: {
          backgroundColor: theme.field_color_base,
          height: 3,
          width: 3,
        },
      }}
      infinite={infinite}
      {...props}
    >
      {children}
    </Carousel>
  );
};
