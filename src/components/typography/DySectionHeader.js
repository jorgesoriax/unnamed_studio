import { VStack } from "@chakra-ui/react";
import DyHeading from "./DyHeading";
import DyText from "./DyText";

export default function DySectionHeader({ heading, children, ...props }) {
  return (
    <VStack spacing={{ base: 2, lg: 4 }} {...props}>
      <DyHeading>{heading}</DyHeading>
      <DyText type="description" textAlign="center">{children}</DyText>
    </VStack>
  );
}
