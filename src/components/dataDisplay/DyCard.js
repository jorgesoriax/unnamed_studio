import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import DyHeading from "../typography/DyHeading";
import DyText from "../typography/DyText";
import DyIcon from "../mediaAndIcons/DyIcon";
import DyBox from "../layout/DyBox";
import DyTag from "./DyTag";

export default function DyCard({
  heading,
  children,
  src,
  icon,
  tag,
  direction = "vertical",
  textAlign = "left",
  variant,
  ...props
}) {
  const coverType = src ? "isImage" : icon ? "isIcon" : "isEmpty";
  const headingType =
    heading && tag
      ? "isHeadingWithTag"
      : heading && !tag
      ? "isOnlyHeading"
      : "isEmpty";

  // TODO Tamaño de imagen personalizado
  // TODO Alineación central de texto

  const styleConfig = {
    baseStyle: {
      parent: {
        templateColumns:
          direction === "vertical" ? "repeat(1, 1fr)" : "min-content auto",
        templateRows:
          direction === "horizontal" || coverType === "isEmpty"
            ? "repeat(1, 1fr)"
            : "repeat(2, auto)",
        gap: coverType === "isEmpty" ? 0 : { base: 4, lg: 6 },
      },
      child: {},
    },
  };
  const contentConfig = {
    coverTypes: {
      isIcon: <DyIcon icon={icon} />,
      isImage: (
        <Image
          w="100%"
          minH="350px"
          objectFit="cover"
          src={src}
          borderRadius="2rem"
        />
      ),
      isEmpty: "",
    },
    headingTypes: {
      isHeadingWithTag: (
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 2, lg: 0 }}
          justify="space-between"
          w="100%"
        >
          <DyHeading variant="title">{heading}</DyHeading>
          <DyTag>{tag}</DyTag>
        </Stack>
      ),
      isOnlyHeading: (
        <DyHeading w="100%" variant="title">
          {heading}
        </DyHeading>
      ),
      isEmpty: "",
    },
  };

  const CardCover = () => {
    return (
      <GridItem {...styleConfig.baseStyle.child}>
        <Flex
          boxSize="100%"
          justify={direction === "horizontal" ? "left" : "center"}
          align="center"
        >
          {contentConfig.coverTypes[coverType]}
        </Flex>
      </GridItem>
    );
  };
  const CardBody = () => {
    return (
      <GridItem {...styleConfig.baseStyle.child}>
        <VStack
          boxSize="100%"
          justify="left"
          align={{ base: "center", lg: "left" }}
          spacing={{ base: 4, lg: 6 }}
          m={1}
        >
          {contentConfig.headingTypes[headingType]}
          <DyText w="100%" type="description" textAlign={textAlign}>
            {children}
          </DyText>
        </VStack>
      </GridItem>
    );
  };
  const CardContainer = ({ children }) => {
    return (
      <DyBox size="md" variant={variant} {...props}>
        <Grid {...styleConfig.baseStyle.parent}>{children}</Grid>
      </DyBox>
    );
  };

  return (
    <CardContainer>
      <CardCover />
      <CardBody />
    </CardContainer>
  );
}
