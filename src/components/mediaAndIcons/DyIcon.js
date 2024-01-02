import { Box, Flex } from "@chakra-ui/react";

export default function DyIcon({ icon, ...props }) {
  return (
    <Box boxSize="51.19px" minW="51.19px" minH="51.19px" color="steel.900" {...props}>
      <Flex boxSize="100%" align="center" justify="center" borderRadius="full" bg="white">
        {icon}
      </Flex>
    </Box>
  );
}
