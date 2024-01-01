import {
  Grid,
  GridItem,
  HStack,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import DyContainer from "../layout/DyContainer";
import DyText from "../typography/DyText";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import DyLogo from "../mediaAndIcons/DyLogo";
import DyLink from "./DyLink";

export default function DyFooter({ data }) {
  const SocialMedia = () => {
    return (
      <GridItem area="social">
        <HStack spacing={{ base: 4, lg: 6 }} justify="right">
          <GlobeAmericasIcon width="24px" height="24px" />
          <GlobeAmericasIcon width="24px" height="24px" />
          <GlobeAmericasIcon width="24px" height="24px" />
          <GlobeAmericasIcon width="24px" height="24px" />
          <GlobeAmericasIcon width="24px" height="24px" />
        </HStack>
      </GridItem>
    );
  };
  const AboutUs = () => {
    return (
      <GridItem area="about">
        <VStack align="left" spacing={{ base: 2, lg: 4 }}>
          <DyLogo variant="horizontal" />
          <DyText type="description">{data.aboutUs}</DyText>
        </VStack>
      </GridItem>
    );
  };
  const LinkList = ({ heading, items }) => {
    return (
      <VStack
        minW="100px"
        spacing={{ base: 2, lg: 4 }}
        textAlign="right"
        align="right"
      >
        <DyText variant="label" type="description" w="100%">
          {heading}
        </DyText>
        <List spacing={{ base: 1.5, lg: 2 }}>
          {items.map(({ title, href }, i) => (
            <ListItem key={i}>
              <DyLink href={href} isExternal>
                {title}
              </DyLink>
            </ListItem>
          ))}
        </List>
      </VStack>
    );
  };
  const Utility = () => {
    return (
      <GridItem area="util">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={0}
          justify="right"
          align="right"
          h="100%"
          gap={{ base: 4, lg: 6 }}
        >
          {data.utility.map(({ title, items }, i) => (
            <LinkList key={i} heading={title} items={items} />
          ))}
        </Stack>
      </GridItem>
    );
  };
  const Secondary = () => {
    return (
      <GridItem area="second">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={0}
          justify="right"
          align="right"
          h="100%"
          gap={{ base: 4, lg: 6 }}
        >
          {data.secondary.map(({ title, items }, i) => (
            <LinkList key={i} heading={title} items={items} />
          ))}
        </Stack>
      </GridItem>
    );
  };
  const Copyright = () => {
    return (
      <GridItem
        area="copy"
        borderTop="1px"
        borderColor="gray.800"
        pt={{ base: 4, lg: 6 }}
      >
        <DyText variant="label">{data.copyright}</DyText>
      </GridItem>
    );
  };
  const FooterContainer = ({ children }) => {
    return (
      <DyContainer size="full" mb={0}>
        <DyContainer size="lg" px={{ base: 4, lg: 6 }}>
          <Grid
            w="100%"
            templateAreas={{
              base: `
                "about"
                "social"
                "util"
                "second"
                "copy"
              `,
              lg: `
                "about social social"
                "about second util"
                "copy copy copy"
              `,
            }}
            gridTemplateColumns={{ base: "auto", lg: "400px auto min-content" }}
            gridTemplateRows="auto auto auto"
            gap={{ base: 4, lg: 6 }}
          >
            {children}
          </Grid>
        </DyContainer>
      </DyContainer>
    );
  };

  return (
    <FooterContainer>
      <AboutUs />
      <SocialMedia />
      <Utility />
      <Secondary />
      <Copyright />
    </FooterContainer>
  );
}
