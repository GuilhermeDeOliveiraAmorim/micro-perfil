import { Box, Button, Flex, Icon, useColorMode } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from 'react-icons/bs';

export default function Home() {
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
          <Button onClick={toggleColorMode} rounded={"full"} p={"0"} colorScheme='blue'>
            {colorMode === "light" ? <Icon as={BsFillLightbulbFill} /> : <Icon as={BsFillLightbulbOffFill} />}
          </Button>
        </Box>
      </Flex>
      <Flex pl={[4, 8, 16, 32]} pr={"40"} h={"80vh"} bg={"gray.300"}>

      </Flex>
      <Flex h={"10vh"} bg={"gray.500"}>Footer</Flex>
    </Flex>
  );
}
