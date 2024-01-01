import { Box, Image } from "@chakra-ui/react";
import DyLink from "../navigation/DyLink";

// TODO Corregir sintaxis y pasar variantes a data

export default function DyLogo({
  scrollTo,
  href,
  isExternal,
  variant = "symbol",
  ...props
}) {
  const hasLink = scrollTo || href || isExternal ? true : false;
  const variants = {
    symbol: {
      src: "/static/images/logo/circular_symbol_dark.svg",
      alt: "",
    },
    horizontal: {
      src: "/static/images/logo/circular_symbol_text_dark.svg",
      alt: "",
    },
  };
  const styles = {
    ...(variants[variant] || {}),
  };

  return hasLink ? (
    <DyLink scrollTo={scrollTo} href={href} isExternal={isExternal} {...props}>
      <Image maxH="60px" src={styles.src} alt={styles.alt} cursor="pointer" />
    </DyLink>
  ) : (
    <Box h="60px" maxH="60px" w="fit-content">
      <Image boxSize="100%" src={styles.src} alt={styles.alt} {...props} />
    </Box>
  );
}
