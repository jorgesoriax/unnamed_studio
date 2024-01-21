import { Tag } from "@chakra-ui/react";

export default function DyTag({ children, ...props }) {
  const styleConfig = {
    baseStyle: {
      borderRadius: "full",
      px: { base: 2, lg: 4 },
      py: { base: 1.5, lg: 2 },
      colorScheme: "dyGray",
      minW: "fit-content",
      maxW: "fit-content",
      fontWeight: "light"
    },
  };

  return (
    <Tag {...styleConfig.baseStyle} {...props}>
      {children}
    </Tag>
  );
}
