import { Image, Text } from "@chakra-ui/react";

interface PerfilImageProps {
  src: string;
  altText: string;
}

export default function PerfilImage({ src, altText }: PerfilImageProps) {
  return <Image borderRadius="full" boxSize="150px" src={src} alt={altText} />;
}
