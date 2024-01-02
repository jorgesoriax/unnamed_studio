import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import DyContainer from "@/components/layout/DyContainer";
import DyHeading from "@/components/typography/DyHeading";
import DySectionHeader from "@/components/typography/DySectionHeader";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import DyText from "@/components/typography/DyText";

export default function DyFAQ({ data }) {
  return (
    <DyContainer id="faq" size="sm" py={{ base: 8, lg: 10 }}>
      <DySectionHeader heading={data.header.title} mb={{ base: 14, lg: 16 }}>
        {data.header.description}
      </DySectionHeader>
      <Accordion w="100%" allowToggle>
        <VStack spacing={{ base: 4, lg: 6 }}>
          {data.questions.map(({ question, answer }, i) => (
            <AccordionItem key={i} w="100%" border={0}>
              {({ isExpanded }) => (
                <>
                  <AccordionButton p={0}>
                    <HStack w="100%" spacing={{ base: 8, lg: 10 }}>
                      <Box as="span" flex="1" textAlign="left">
                        <DyHeading variant="subtitle">{question}</DyHeading>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon width="24" height="24" />
                      ) : (
                        <PlusIcon width="24" height="24" />
                      )}
                    </HStack>
                  </AccordionButton>
                  <AccordionPanel p={0} pt={{ base: 1.5, lg: 2 }}>
                    <DyText type="description">{answer}</DyText>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </VStack>
      </Accordion>
    </DyContainer>
  );
}
