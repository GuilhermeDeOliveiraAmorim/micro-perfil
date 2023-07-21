import { Text } from "@chakra-ui/react";

interface PerfilTitleProps {
  title: string;
}

export const PerfilTitle = ({ title }: PerfilTitleProps) => {
  return <Text>{title}</Text>;
};
