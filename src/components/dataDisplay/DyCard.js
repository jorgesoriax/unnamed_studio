import {
  Box,
  Grid,
  GridItem,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import DyText from "../typography/DyText";
import DyBox from "../layout/DyBox";
import DyHeading from "../typography/DyHeading";
import DyTag from "./DyTag";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import DyButton from "../forms/DyButton";

export default function DyCard({
  heading,
  description,
  features,
  tag,
  direction = "vertical",
  variant,
  ...props
}) {
  const styleConfig = {
    baseStyle: {
      templateColumns: "repeat(1, 1fr)",
      gap: { base: 2, lg: 4 },
    },
  };
  const CardHeader = () => {
    return (
      <GridItem>
        <VStack  align="left" spacing={{ base: 1.5, lg: 2 }} >
          <DyHeading variant="title">{heading}</DyHeading>
          {/* <DyText type="description">{description}</DyText> */}
        </VStack>
      </GridItem>
    );
  };
  const CardBody = () => {
    return (
      <GridItem gap={{ base: 2, lg: 4 }}>
        <VStack
          align="left"
          spacing={{ base: 8, lg: 10 }}
          wordBreak="break-word"
        >
          <DyTag>{tag}</DyTag>
          <List spacing={{ base: 1.5, lg: 2 }}>
            {features.map((feature, i) => (
              <ListItem key={i}>
                <HStack align="start">
                  <Box>
                    <CheckCircleIcon width="24px" height="24px" />
                  </Box>
                  <DyText>{feature}</DyText>
                </HStack>
              </ListItem>
            ))}
          </List>
        </VStack>
      </GridItem>
    );
  };
  const CardContainer = ({ children }) => {
    return (
      <DyBox size="md" variant={variant} {...props}>
        <Grid {...styleConfig.baseStyle}>{children}</Grid>
      </DyBox>
    );
  };
  return (
    <CardContainer>
      <CardHeader />
      <CardBody />
    </CardContainer>
  );
}
