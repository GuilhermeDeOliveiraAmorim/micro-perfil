import { Box } from "@chakra-ui/react";
import HeaderButton from "./components/header/HeaderButton";
import { Perfil } from "./components/perfil";
import { perfil } from "./repository/perfil.seed";
import { SocialNetwork } from "./components/socialNetwork";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import ContentRoot from "./components/content/ContentRoot";
import FooterRoot from "./components/footer/FooterRoot";
import HeaderRoot from "./components/header/HeaderRoot";

export default function Home() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100vh"}
      justifyContent={"space-between"}
    >
      <HeaderRoot>
        <HeaderButton />
      </HeaderRoot>

      <ContentRoot
        gridArrangement={{
          templateColumns: {
            quantity: 3,
            fraction: 1,
          },
          templateRows: {
            quantity: 1,
            fraction: 1,
          },
        }}
      >
        <Perfil.Root>
          <Perfil.Image src={perfil.image} altText={perfil.name} />
          <Perfil.Title title={perfil.jobTitle} />
          <Perfil.SocialNetworks>
            <SocialNetwork icon={AiFillLinkedin} link="" />
            <SocialNetwork icon={AiFillGithub} link="" />
            <SocialNetwork icon={AiFillInstagram} link="" />
          </Perfil.SocialNetworks>
          <Perfil.Bio bioText={perfil.bio} />
        </Perfil.Root>
        <div>B</div>
        <div>C</div>
      </ContentRoot>

      <FooterRoot>
        <div>Footer</div>
      </FooterRoot>
    </Box>
  );
}
