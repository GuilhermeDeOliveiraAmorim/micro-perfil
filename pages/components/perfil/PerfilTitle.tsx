import { Text } from "@chakra-ui/react";

interface PerfilTitleProps {
  title: string;
}

export default function PerfilTitle({ title }: PerfilTitleProps) {
  return <Text>{title}</Text>;
}
