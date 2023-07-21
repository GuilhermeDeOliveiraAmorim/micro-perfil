import { Text } from "@chakra-ui/react";

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
        <Text mb={4}>
          <Text as="b" mr={2}>
            {element.title}
          </Text>
          {element.paragraph.map((p) => p)}
        </Text>
      ))}
    </>
  );
}
