import {
  Box,
  Grid,
  GridItem,
  HStack,
  List,
  ListItem,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import DyContainer from "@/components/layout/DyContainer";
import DyBox from "@/components/layout/DyBox";
import DySectionHeader from "@/components/typography/DySectionHeader";
// import DyCard from "@/components/dataDisplay/DyCard_old";
import DyButton from "@/components/forms/DyButton";
import {
  BookmarkIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import DyText from "@/components/typography/DyText";
import DyCard from "@/components/dataDisplay/DyCard";
import DyIcon from "@/components/mediaAndIcons/DyIcon";
import DyLink from "@/components/navigation/DyLink";

export default function DyPricing({ data }) {
  const cardDirection = useBreakpointValue({
    base: "vertical",
    lg: "horizontal",
  });

  return (
    <DyContainer id="services">
      <DyBox variant="outline" size="lg">
        <DySectionHeader heading={data.header.title}>
          {data.header.description}
        </DySectionHeader>

        <Grid
          templateColumns={{ base: "auto", lg: "repeat(3, 1fr)" }}
          gap={{ base: 4, lg: 6 }}
        >
          {data.services.map(
            ({ heading, description, price, features, link }, i) => (
              <GridItem key={i}>
                {/* <DyLink
                  href={link}
                  isExternal
                  _hover={{ textDecoration: "none" }}
                > */}
                <DyCard
                  h="100%"
                  heading={heading}
                  tag={price}
                  description={description}
                  features={features}
                  // cursor="pointer"
                  // _hover={{ bg: "violet.500" }}
                />
                {/* </DyLink> */}
              </GridItem>
            )
          )}
        </Grid>

        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 8, lg: 10 }}
        >
          <DyIcon icon={<InformationCircleIcon width="24px" height="24px" />} />
          <DyText type="description">{data.tip.description}</DyText>
          <DyButton
            colorScheme="gray"
            color="steel.900"
            fontWeight="semibold"
            href={data.tip.href}
            isExternal
          >
            {data.tip.action}
          </DyButton>
        </Stack>
      </DyBox>
    </DyContainer>
  );
}
