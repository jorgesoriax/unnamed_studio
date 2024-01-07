import DyContainer from "@/components/layout/DyContainer";
import DyHeading from "@/components/typography/DyHeading";
import DyText from "@/components/typography/DyText";
import DyButton from "@/components/forms/DyButton";
import { Stack } from "@chakra-ui/react";

export default function DyHero({ data }) {
  return (
    <DyContainer
      size="xl"
      h={{
        base: "calc(100dvh - 92px)",
        lg: "calc(100vh - 107.98px)",
      }}
      maxH="800px"
      bgImage="url('/static/images/hero/bgherotest.png')"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <DyContainer size="sm" mb={0}>
        <DyHeading variant="display" textAlign="center">
          {data.textContent.heading}
        </DyHeading>
        <DyText type="description" textAlign="center">
          {data.textContent.body}
        </DyText>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 4, lg: 6 }}
          mt={{ base: 14, lg: 16 }}
        >
          <DyButton colorScheme="lime" color="steel.900" fontWeight="semibold">
            {data.actions.primary.title}
          </DyButton>
          <DyButton variant="ghost" scrollTo={data.actions.secondary.to}>
            {data.actions.secondary.title}
          </DyButton>
        </Stack>
      </DyContainer>
    </DyContainer>
  );
}
