import DyContainer from "@/components/layout/DyContainer";
import DyCard from "@/components/dataDisplay/DyCard";
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { BoltIcon } from "@heroicons/react/24/solid";

export default function DyFeatures({ data }) {
  const cardDirection = useBreakpointValue({
    base: "vertical",
    lg: "horizontal",
  });

  return (
    <DyContainer id="features" size="md">
      <Grid
        w="100%"
        templateColumns={{ base: "auto", lg: "repeat(2, 1fr)" }}
        gap={{ base: 14, lg: 16 }}
      >
        {data.features.map(({ title, description }, i) => (
          <GridItem key={i}>
            <DyCard
              variant="ghost"
              icon={<BoltIcon width="24px" height="24px" />}
              heading={title}
              direction={cardDirection}
              textAlign="center"
            >
              {description}
            </DyCard>
          </GridItem>
        ))}
      </Grid>
    </DyContainer>
  );
}
