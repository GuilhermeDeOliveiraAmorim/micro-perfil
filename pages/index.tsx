import { Box, Button, Flex, Icon, Link, Text, useColorMode } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from 'react-icons/bs';

export default function Home() {
  const timeNow = new Date().getFullYear();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex h={"100vh"} justifyContent={"space-between"} flexDirection={"column"}>
      <Flex p={"4"} h={"10vh"} bg={"gray.200"} justifyContent={"space-between"} alignItems={"center"}>
        <Box>Logo</Box>
        <Flex gap={"4"} justifyContent={"space-between"} alignItems={"center"}>
          <Icon boxSize={[5, 6, 7, 8]} as={AiFillGithub} />
          <Icon boxSize={[5, 6, 7, 8]} as={AiFillLinkedin} />
        </Flex>
        <Box>
          <Button onClick={toggleColorMode} rounded={"full"} p={"0"} colorScheme={"blackAlpha"}>
            {colorMode === "light" ? <Icon as={BsFillLightbulbFill} /> : <Icon as={BsFillLightbulbOffFill} />}
          </Button>
        </Box>
      </Flex>
      <Flex pl={[4, 8, 16, 32]} pr={"40"} h={"80vh"} bg={"gray.300"}>
        <Flex w={"100%"}>
          <Flex w={"40vw"}>
            Bio
          </Flex>
          <Flex w={"60vw"}>
            Projects
          </Flex>
        </Flex>
      </Flex>
      <Flex h={"10vh"} bg={"gray.500"} justifyContent={"center"} alignItems={"center"}>
        <Text>
          Designed by Guilherme Amorim - {timeNow} - Made with <Link target={"_blank"} href="https://chakra-ui.com/">Chakra UI</Link> in <Link target={"_blank"} href="https://nextjs.org/">Next.js</Link>
        </Text>
      </Flex>
    </Flex>
  );
}
