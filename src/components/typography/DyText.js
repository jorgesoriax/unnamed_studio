import { Text } from "@chakra-ui/react";

/**
 *
 */
export default function DyText({ variant = "text", type, children, ...props }) {
  const styleConfig = {
    baseStyle: {
      fontWeight: "normal",
    },
    variants: {
      text: {
        fontSize: "md",
      },
      label: {
        fontSize: "sm",
      },
    },
    types: {
      description: {
        color: "dySlate.200",
      },
    },
  };

  return (
    <Text
      {...styleConfig.baseStyle}
      {...styleConfig.variants[variant]}
      {...styleConfig.types[type]}
      {...props}
    >
      {children}
    </Text>
  );
}
