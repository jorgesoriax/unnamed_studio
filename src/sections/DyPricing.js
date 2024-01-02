import { Grid, GridItem, Stack, useBreakpointValue } from "@chakra-ui/react";
import DyContainer from "@/components/layout/DyContainer";
import DyBox from "@/components/layout/DyBox";
import DySectionHeader from "@/components/typography/DySectionHeader";
import DyCard from "@/components/dataDisplay/DyCard";
import DyButton from "@/components/forms/DyButton";
import { BookmarkIcon } from "@heroicons/react/24/solid";

export default function DyPricing({ data }) {
  const cardDirection = useBreakpointValue({
    base: "vertical",
    lg: "horizontal",
  });

  return (
    <DyContainer id="services">
      <DyBox variant="outline" size="lg">
        <DySectionHeader heading="Servicios">
          Lorem ipsum dolor sit amet consectetur. Quis vivamus in aenean
          pulvinar.
        </DySectionHeader>

        <Grid
          templateColumns={{ base: "auto", lg: "repeat(2, 1fr)" }}
          gap={{ base: 4, lg: 6 }}
        >
          {data.services.map(({ title, description, price }, i) => (
            <GridItem key={i}>
              <DyCard
                heading={title}
                tag={price}
                cursor="pointer"
                _hover={{ bg: "violet.500" }}
              >
                {description}
              </DyCard>
            </GridItem>
          ))}
        </Grid>

        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 8, lg: 10 }}
        >
          <DyCard
            direction={cardDirection}
            variant="ghost"
            icon={<BookmarkIcon width="24px" height="24px" />}
            textAlign="center"
          >
            Si no encuentras lo que buscas, por favor, escríbenos y con gusto te
            ofreceremos soluciones personalizadas.
          </DyCard>
          <DyButton
            colorScheme="gray"
            color="steel.900"
            fontWeight="semibold"
          >
            Contáctanos
          </DyButton>
        </Stack>
      </DyBox>
    </DyContainer>
  );
}
