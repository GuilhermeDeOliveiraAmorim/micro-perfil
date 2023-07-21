import { Box, Stack, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

interface PerfilBioProps {
  bioText: {
    title: string;
    paragraph: string[];
  }[];
}

export const PerfilBio = ({ bioText }: PerfilBioProps) => {
  return (
    <Stack spacing={2}>
      {bioText.map((element) => (
        <Text>{element.title}</Text>
      ))}
    </Stack>
  );
};
