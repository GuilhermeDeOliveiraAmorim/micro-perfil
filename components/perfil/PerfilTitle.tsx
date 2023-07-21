import { Text } from "@chakra-ui/react";

interface PerfilTitleProps {
  title: string;
}

export const PerfilTitle = ({ title }: PerfilTitleProps) => {
  return (
    <Text fontSize={{ base: "10px", md: "15px", lg: "20px" }}>{title}</Text>
  );
};
