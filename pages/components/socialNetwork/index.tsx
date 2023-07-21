import { Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface SocialNetworkProps {
  icon: IconType;
  link: string;
}

export function SocialNetwork({ icon, link }: SocialNetworkProps) {
  return (
    <Link href={link}>
      <Icon as={icon} />
    </Link>
  );
}
