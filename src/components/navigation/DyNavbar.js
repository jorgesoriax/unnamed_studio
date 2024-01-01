import React from "react";
import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Show,
  Stack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import DyContainer from "../layout/DyContainer";
import DyButton from "../forms/DyButton";
import DyLogo from "../mediaAndIcons/DyLogo";

export default function DyNavbar({ data }) {
  const variantBreakpoint = useBreakpointValue({
    base: "symbol",
    lg: "horizontal",
  });

  // Enlaces de navegación
  const Links = ({ ...props }) => {
    return (
      <Stack direction="row" display={{ base: "none", lg: "flex" }} {...props}>
        {data.links.map(({ title, to }, i) => (
          <DyButton key={i} variant="ghost" scrollTo={to}>
            {title}
          </DyButton>
        ))}
      </Stack>
    );
  };
  // Botones de llamada a la acción
  const Actions = () => {
    // Menu Hamburguer (versión móvil)
    const HamburguerMenu = () => {
      const { isOpen, onOpen, onClose } = useDisclosure();

      return (
        <>
          <DyButton
            icon={<Bars3Icon width="32px" height="32px" />}
            onClick={onOpen}
            variant="ghost"
          />

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              borderRadius="2rem"
              p={{ base: 4, lg: 6 }}
              w="100%"
              m={{ base: 4, lg: 6 }}
              bg="gray.900"
            >
              <ModalHeader p={0} mb={{ base: 4, lg: 6 }}>
                <Flex w="100%" justify="right">
                  <DyButton
                    icon={<XMarkIcon width="32px" height="32px" />}
                    variant="ghost"
                    onClick={onClose}
                  />
                </Flex>
              </ModalHeader>
              <ModalBody>
                <Links
                  direction="column"
                  align="center"
                  display={{ base: "flex", lg: "none" }}
                />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      );
    };

    return (
      <HStack>
        <Show above="lg">
          {data.cta.map(({ title, to }, i) => (
            <DyButton key={i} scrollTo={to}>
              {title}
            </DyButton>
          ))}
        </Show>
        <Show below="lg">
          <HamburguerMenu />
        </Show>
      </HStack>
    );
  };
  // Contenedor para subcomponentes de Navbar
  const NavbarContainer = ({ children }) => {
    return (
      <DyContainer
        size="full"
        as="nav"
        top="0"
        pos="sticky"
        zIndex="sticky"
        backdropFilter="auto"
        backdropBlur="2px"
        borderBottom="1px"
        borderColor="gray.800"
        bg="grayAlpha"
        mb={0}
      >
        <DyContainer
          size="lg"
          border="none"
          justify="space-between"
          direction="row"
          px={{ base: 4, lg: 10 }}
          py={{ base: 4, lg: 6 }}
          mb={0}
        >
          <Grid templateColumns="repeat(3, 1fr)" w="100%">
            <GridItem alignSelf="center">
              <DyLogo variant={variantBreakpoint} href="/" />
            </GridItem>
            <GridItem justifySelf="center" alignSelf="center">
              <Links />
            </GridItem>
            <GridItem justifySelf="right" alignSelf="center">
              <Actions />
            </GridItem>
          </Grid>
        </DyContainer>
      </DyContainer>
    );
  };

  return <NavbarContainer />;
}
