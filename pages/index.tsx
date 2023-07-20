import { Box } from "@chakra-ui/react";
import { HeaderRoot } from "./components/header/HeaderRoot";
import { ContentRoot } from "./components/content/ContentRoot";
import { FooterRoot } from "./components/footer/FooterRoot";
import HeaderButton from "./components/header/HeaderButton";

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
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </ContentRoot>

      <FooterRoot>
        <div>Footer</div>
      </FooterRoot>
    </Box>
  );
}
