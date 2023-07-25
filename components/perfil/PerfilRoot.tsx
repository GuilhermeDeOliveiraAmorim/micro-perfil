import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PerfilRootProps {
  children: ReactNode;
}

export const PerfilRoot = ({ children }: PerfilRootProps) => {
  return <Flex>{children}</Flex>;
};
