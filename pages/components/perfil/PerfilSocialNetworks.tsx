import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PerfilSocialNetworksProps {
  children: ReactNode;
}

export default function PerfilSocialNetworks({
  children,
}: PerfilSocialNetworksProps) {
  return <Flex>{children}</Flex>;
}
