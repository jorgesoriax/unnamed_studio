import DyContainer from "@/components/layout/DyContainer";
import DyCard from "@/components/dataDisplay/DyCard_old";
import { Grid, GridItem } from "@chakra-ui/react";

export default function DyFeatures({ data }) {
  return (
    <DyContainer id="features" size="sm">
      <Grid
        w="100%"
        templateColumns={{ base: "auto", lg: "repeat(2, 1fr)" }}
        gap={{ base: 4, lg: 6 }}
      >
        {data.features.map(({ title, description, bg, icon }, i) => (
          <GridItem key={i}>
            {/* // TODO Reemplazar por nuevo DyCard */}
            <DyCard
              h="100%"
              variant="outline"
              icon={icon}
              heading={title}
              direction="vertical"
              textAlign="center"
              bgImage={`url('${bg}')`}
              bgPosition="center"
              bgSize="cover"
              bgRepeat="no-repeat"
            >
              {description}
            </DyCard>
          </GridItem>
        ))}
      </Grid>
    </DyContainer>
  );
}
