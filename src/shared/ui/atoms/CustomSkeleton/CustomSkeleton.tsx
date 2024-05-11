import { Skeleton, SkeletonProps } from "@rneui/base";
import React from "react";

import { theme } from "../../../theme";

export const CustomSkeleton = ({
  skeletonStyle,
  style,
  ...props
}: SkeletonProps) => {
  return (
    <Skeleton
      skeletonStyle={{
        backgroundColor: theme.color_text_placeholder,
        ...(skeletonStyle as object),
      }}
      style={{
        backgroundColor: theme.link_button_fill_tap,
        ...(style as object),
      }}
      {...props}
    />
  );
};
