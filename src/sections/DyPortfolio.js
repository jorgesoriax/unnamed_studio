import DyCard from "@/components/dataDisplay/DyCard";
import DyBox from "@/components/layout/DyBox";
import DyContainer from "@/components/layout/DyContainer";
import DySectionHeader from "@/components/typography/DySectionHeader";
import { Grid, GridItem } from "@chakra-ui/react";

export default function DyPortfolio({ data }) {
  const PortfolioBody = () => {
    return (
      <Grid
        templateColumns={{ base: "auto", lg: "repeat(2, 1fr)" }}
        gap={{ base: 8, lg: 10 }}
      >
        {data.projects.map(({ heading, body, tag, cover, alt }, i) => (
          <GridItem key={i}>
            <DyCard variant="ghost" src={cover} heading={heading} tag={tag}>
              {body}
            </DyCard>
          </GridItem>
        ))}
      </Grid>
    );
  };
  return (
    <DyContainer id="portfolio" mb={{ base: 20, lg: 24 }}>
      <DyBox variant="outline">
        <DySectionHeader heading="Hecha un ojo a nuestro trabajo">
          Potencia tus emprendimientos y proyectos con diseños personalizados a
          tu medida.
        </DySectionHeader>
        <PortfolioBody />
      </DyBox>
    </DyContainer>
  );
}
