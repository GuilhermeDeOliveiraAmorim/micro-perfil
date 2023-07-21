import { Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

interface PerfilBioProps {
  bioText: {
    title: string;
    paragraph: string[];
  }[];
}

export function PerfilBio({ bioText }: PerfilBioProps) {
  return (
    <>
      {bioText.map((element) => (
        <Text key={uuidv4()} mb={4}>
          <Text as="b" mr={2}>
            {element.title}
          </Text>
          {element.paragraph.map((p) => p)}
        </Text>
      ))}
    </>
  );
}
