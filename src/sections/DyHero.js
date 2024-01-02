import DyContainer from "@/components/layout/DyContainer";
import DyHeading from "@/components/typography/DyHeading";
import DyText from "@/components/typography/DyText";
import DyButton from "@/components/forms/DyButton";
import { Stack } from "@chakra-ui/react";
import { FireIcon } from "@heroicons/react/24/solid";

export default function DyHero({ data }) {
  return (
    <DyContainer
      size="xl"
      h={{
        base: "calc(100dvh - 92px - 50px)",
        lg: "calc(100vh - 107.98px - 50px)",
      }}
      maxH="800px"
      mb={0}
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
          <DyButton
            icon={<FireIcon width="24px" height="24px" />}
            colorScheme="lime"
            color="steel.900"
            fontWeight="semibold"
          >
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
