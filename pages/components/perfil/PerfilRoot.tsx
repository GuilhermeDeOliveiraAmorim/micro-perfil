import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PerfilRootProps {
  children: ReactNode;
}

export function PerfilRoot({ children }: PerfilRootProps) {
  return (
    <Flex bg="tomato" w="100%" p={4}>
      {children}
    </Flex>
  );
}
