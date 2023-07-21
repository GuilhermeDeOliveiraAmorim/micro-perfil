import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { Box } from "@chakra-ui/react";
import Header from "../components/header";
import Content from "../components/content";
import Perfil from "../components/perfil";
import SocialNetwork from "../components/socialNetwork";
import Footer from "../components/footer";
import { perfil } from "../repository/perfil.seed";

export default function Home() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100vh"}
      justifyContent={"space-between"}
    >
      <Header.Root>
        <Header.Button />
      </Header.Root>

      <Content.Root
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
      </Content.Root>

      <Footer.Root>
        <div>Footer</div>
      </Footer.Root>
    </Box>
  );
}
