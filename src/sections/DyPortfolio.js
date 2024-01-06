import DyCard from "@/components/dataDisplay/DyCard_old";
import DyButton from "@/components/forms/DyButton";
import DyBox from "@/components/layout/DyBox";
import DyContainer from "@/components/layout/DyContainer";
import DyImage from "@/components/mediaAndIcons/DyImage";
import DySectionHeader from "@/components/typography/DySectionHeader";
import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function DyPortfolio({ data }) {
  const Body = () => {
    return (
      <Grid
        templateColumns={{ base: "auto", lg: "repeat(2, 1fr)" }}
        templateRows={{ base: "auto", lg: "repeat(2, 1fr)" }}
        gap={{ base: 8, lg: 10 }}
      >
        {data.projects.map(({ heading, body, tag, cover, alt }, i) => (
          <GridItem key={i}>
            <DyImage src={cover}/>
          </GridItem>
        ))}
      </Grid>
    );
  };
  const Actions = () => {
    return (
      <VStack>
        <DyButton
          colorScheme="lime"
          color="steel.900"
          fontWeight="semibold"
          icon={data.actions.icon}
          href={data.actions.href}
          isExternal
        >
          {data.actions.title}
        </DyButton>
      </VStack>
    );
  };

  const DyPortfolioContainer = () => {
    return (
      <DyContainer id="portfolio" mb={{ base: 20, lg: 24 }}>
        <DyBox variant="ghost">
          <DySectionHeader heading="Hecha un ojo a nuestro trabajo">
            Potencia tus emprendimientos y proyectos con diseños personalizados
            a tu medida.
          </DySectionHeader>
          <Actions />
          <Body />
        </DyBox>
      </DyContainer>
    );
  };

  return <DyPortfolioContainer />;
}
