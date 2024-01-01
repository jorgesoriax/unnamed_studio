import { Box, Stack } from "@chakra-ui/react";

export default function DyBox({
  variant = "solid",
  size = "lg",
  children,
  direction = "column",
  ...props
}) {
  const styleConfig = {
    baseStyle: {
      parent: {
        w: "100%",
        color: "white",
      },
      child: {
        spacing: { base: 14, lg: 16 },
      },
    },
    sizes: {
      sm: {
        borderRadius: "1.5rem",
        p: { base: 4, lg: 6 },
      },
      md: {
        borderRadius: "2rem",
        p: { base: 8, lg: 10 },
      },
      lg: {
        borderRadius: "3rem",
        p: { base: 10, lg: 16 },
      },
    },
    variants: {
      solid: {
        bg: "dySteel.900",
      },
      outline: {
        border: "1px",
        borderColor: "dyGray.800",
        bg: "transparent",
      },
      ghost: {
        p: 0,
        bg: "transparent",
        borderRadius: 0,
      },
    },
  };
  return (
    <Box
      {...styleConfig.baseStyle.parent}
      {...styleConfig.sizes[size]}
      {...styleConfig.variants[variant]}
      {...props}
    >
      <Stack {...styleConfig.baseStyle.child} direction={direction}>
        {children}
      </Stack>
    </Box>
  );
}
