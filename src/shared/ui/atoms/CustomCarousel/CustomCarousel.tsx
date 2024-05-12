import { Carousel } from "@ant-design/react-native";
import { CarouselProps } from "@ant-design/react-native/es/carousel";
import React from "react";

export const CustomCarousel = ({
  children,
  infinite = true,
  ...props
}: CarouselProps) => {
  return (
    <Carousel infinite={infinite} {...props}>
      {children}
    </Carousel>
  );
};
