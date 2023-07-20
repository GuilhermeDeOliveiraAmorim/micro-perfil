import { Text } from "@chakra-ui/react";

interface PerfilTitleProps {
  title: string;
}

export function PerfilTitle({ title }: PerfilTitleProps) {
  return <Text>{title}</Text>;
}
