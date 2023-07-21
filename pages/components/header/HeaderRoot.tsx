import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeaderRootProps {
  children: ReactNode;
}

export default function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <Flex bg="tomato" w="100%" p={4}>
      {children}
    </Flex>
  );
}
