import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { Link, useBreakpointValue } from "@chakra-ui/react";

/**
 * "LinkWrapper" es un componente que permite a un elemento desplazarse a una sección específica de la página
 * o funcionar como enlace interno o externo.
 * @param {string} props.scrollTo - Identificador de la sección a la que se desplazará el botón.
 * @param {string} props.href - URL para enlaces internos o externos.
 * @param {boolean} props.isExternal - Indica si el enlace es externo.
 * @param {object} props.children - Contenido del componente.
 */
export default function DyLink({ scrollTo, href, isExternal, children }) {
  // Determina cómo se renderizará el botón en función de su destino.
  // - Si es un enlace interno, se establece como "isInternal".
  // - Si es un enlace externo, se establece como "isExternal".
  // - Si se desplaza a una sección de la página, se establece como "isScroll".
  // - Si no se proporciona un destino, se mantiene como "undefined" para imprimir un "BaseButton" simple.
  let linkType = scrollTo
    ? "isScroll"
    : href && isExternal
    ? "isExternal"
    : href && !isExternal
    ? "isInternal"
    : undefined;
  const setOffset = useBreakpointValue({ base: -190, lg: -205 });

  // Renderiza un tipo de enlace según la variable "linkType"
  switch (linkType) {
    case "isInternal":
      return (
        <Link as={NextLink} href={href}>
          {children}
        </Link>
      );
    case "isExternal":
      return (
        <Link as={NextLink} href={href} isExternal>
          {children}
        </Link>
      );
    case "isScroll":
      return (
        <ScrollLink
          activeClass="active"
          to={scrollTo}
          spy={true}
          smooth={true}
          duration={500}
          offset={setOffset}
        >
          {children}
        </ScrollLink>
      );
    default:
      return null;
  }
}
