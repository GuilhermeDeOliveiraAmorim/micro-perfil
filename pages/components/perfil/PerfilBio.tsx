import { Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

interface PerfilBioProps {
  bioText: {
    title: string;
    paragraph: string[];
  }[];
}

export default function PerfilBio({ bioText }: PerfilBioProps) {
  return (
    <>
      {bioText.map((element) => (
        <Text key={uuidv4()} mb={4}>
          <Text key={uuidv4()} as="b" mr={2}>
            {element.title}
          </Text>
        </Text>
      ))}
    </>
  );
}
