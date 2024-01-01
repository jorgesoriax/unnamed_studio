import { Heading } from "@chakra-ui/react";

/**
 *
 */
export default function DyHeading({ variant = "header", children, ...props }) {
  const styleConfig = {
    variants: {
      display: {
        as: "h1",
        fontSize: { base: "5xl", lg: "6xl" },
        fontWeight: "bold",
      },
      header: {
        as: "h2",
        fontSize: { base: "4xl", lg: "5xl" },
        fontWeight: "bold",
      },
      title: {
        as: "h3",
        fontSize: { base: "2xl", lg: "3xl" },
        fontWeight: "semibold",
      },
      subtitle: {
        as: "h4",
        fontSize: { base: "lg", lg: "xl" },
        fontWeight: "medium",
      },
    },
  };
  return (
    <Heading
      {...styleConfig.baseStyle}
      {...styleConfig.variants[variant]}
      {...props}
    >
      {children}
    </Heading>
  );
}
