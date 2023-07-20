import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FooterRootProps {
  children: ReactNode;
}

export function FooterRoot({ children }: FooterRootProps) {
  return (
    <Flex bg="blue.200" w="100%" pl={300} pr={300} pt={4} pb={4}>
      {children}
    </Flex>
  );
}
