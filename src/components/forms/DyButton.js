import { Box, Button, DarkMode, LightMode } from "@chakra-ui/react";
import DyText from "../typography/DyText";
import DyLink from "../navigation/DyLink";

export default function DyButton({
  children,
  scrollTo,
  href,
  isExternal,
  icon,
  fontWeight = "normal",
  ...props
}) {
  let buttonType =
    icon && children
      ? "isTextWithIcon"
      : icon && !children
      ? "isOnlyIcon"
      : "isOnlyText";
  const hasLink = scrollTo || href || isExternal ? true : false;

  const styleConfig = {
    baseStyle: {
      px: 8,
      py: 4,
      borderRadius: "full",
      minW: "fit-content",
      height: "fit-content",
      colorScheme: "violet",
    },
    types: {
      isTextWithIcon: {
        py: "0.475rem",
        pl: "0.475rem",
      },
      isOnlyIcon: {
        px: "0.788rem",
        py: "0.788rem",
      },
    }
  };
  const contentConfig = {
    isTextWithIcon: (
      <>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxSize={9}
          borderRadius="full"
          mr={4}
        >
          {icon}
        </Box>
        <DyText fontWeight={fontWeight}>{children}</DyText>
      </>
    ),
    isOnlyIcon: <>{icon}</>,
    isOnlyText: <DyText fontWeight={fontWeight}>{children}</DyText>,
  };

  const BaseButton = () => {
    const ColorMode = !props.variant || props.variant === "solid" ? LightMode : DarkMode;

    return (
      <ColorMode>
        <Button
          {...styleConfig.baseStyle}
          {...styleConfig.types[buttonType]}
          {...props}
        >
          {contentConfig[buttonType]}
        </Button>
      </ColorMode>
    );
  };

  return hasLink ? (
    <DyLink href={href} isExternal={isExternal} scrollTo={scrollTo}>
      <BaseButton />
    </DyLink>
  ) : (
    <BaseButton />
  );
}
