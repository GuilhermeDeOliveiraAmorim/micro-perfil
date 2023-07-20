import { Text } from "@chakra-ui/react";

interface PerfilBioProps {
  bioText: string;
}

export function PerfilBio({ bioText }: PerfilBioProps) {
  return <Text>{bioText}</Text>;
}
