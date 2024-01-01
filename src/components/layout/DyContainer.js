import { Container, Flex } from "@chakra-ui/react";

/**
 * DyContainer es un componente que proporciona un contenedor flexible con opciones de tamaño, alineación y justificación.
 *
 * @param {object} props.children - Contenido del contenedor.
 * @param {string} props.size - Tamaño del contenedor, por defecto es "lg".
 * @param {string} props.align - Alineación de los elementos dentro del contenedor, por defecto es "center".
 * @param {string} props.justify - Justificación de los elementos dentro del contenedor, por defecto es "center".
 * @param {string} props.direction - Dirección del flujo de elementos dentro del contenedor, por defecto es "column".
 */
export default function DyContainer({
  children,
  size = "lg",
  justify,
  align,
  direction,
  variant,
  ...props
}) {
  // Definición de tamaños predefinidos para el contenedor.

  const styleConfig = {
    baseStyle: {
      parent: {
        as: "section",
        px: { base: 8, lg: 0 },
        py: 0,
        mb: { base: 20, lg: 24 },
      },
      child: {
        boxSize: "100%",
        justify: "center",
        align: "center",
        direction: "column",
      },
    },
    sizes: {
      full: {
        maxW: "100%",
      },
      xl: {
        maxW: "1920px",
      },
      lg: {
        maxW: "1280px",
      },
      md: {
        maxW: "1024px",
      },
      sm: {
        maxW: "880px",
      },
    },
  };
  // Definición del conjunto de estilos correspondientes según la variable "sizes".

  return (
    <Container
      {...styleConfig.baseStyle.parent}
      {...styleConfig.sizes[size]}
      {...props}
    >
      <Flex {...styleConfig.baseStyle.child}>{children}</Flex>
    </Container>
  );
}
