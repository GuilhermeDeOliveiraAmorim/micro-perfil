import { Badge, Box, Button, Flex, Grid, HStack, Icon, Image, Link, Text, useColorMode } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from 'react-icons/bs';

export default function Home() {
	const timeNow = new Date().getFullYear();
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Flex w={"full"} h={"100vh"} justifyContent={"space-between"} flexDirection={["column"]}>
			<Flex p={"4"} h={"10vh"} bg={"gray.100"} justifyContent={"space-between"} alignItems={"center"}>
				<Box>Logo</Box>
				<Flex gap={"4"} justifyContent={"space-between"} alignItems={"center"}>
					<Button p={0} m={0} backgroundColor={"transparent"}>
						<Icon boxSize={[6, 6, 7, 8]} as={AiFillGithub} />
					</Button>
					<Button p={0} m={0} backgroundColor={"transparent"}>
						<Icon boxSize={[6, 6, 7, 8]} as={AiFillLinkedin} />
					</Button>
				</Flex>
				<Box>
					<Button onClick={toggleColorMode} rounded={"full"} p={"0"} colorScheme={"blackAlpha"}>
						{colorMode === "light" ? <Icon as={BsFillLightbulbFill} /> : <Icon as={BsFillLightbulbOffFill} />}
					</Button>
				</Box>
			</Flex>
			<Flex p={"4"} gap={"4"} h={"80vh"} pl={"140px"} pr={"140px"} justifyContent={"space-between"} flexDirection={["column", "column", "row", "row"]}>
				<Flex boxShadow={"md"} p={"4"} w={"40%"} h={"100%"} border={"1px solid"} borderColor={"gray.200"} rounded={"lg"} justifyContent={"flex-start"} mb={"4"} flexDirection={["column"]}>
					<Flex justifyContent={"center"} mb={"4"}>
						<Image
							borderRadius={"full"}
							border={"1px solid"}
							borderColor={"gray.200"}
							boxSize={"80px"}
							src={"https://bit.ly/dan-abramov"}
							alt={"Dan Abramov"}
						/>
					</Flex>
					<HStack>
						<Text>
							Lorem ipsum dolor sit amet. Ex quibusdam fugit ea velit quisquam rem ipsa provident aut illo neque ut magnam voluptate cum Quis voluptatem ut esse minus? Ut tempora odit est assumenda beatae et voluptatem voluptatem. Ea impedit porro ex necessitatibus voluptate non autem dignissimos. Et molestiae dolores vel quia quidem et expedita perferendis non consequatur architecto.
						</Text>
					</HStack>
				</Flex>
				<Grid w={"60%"} gap={"4"} templateColumns='repeat(2, 1fr)' templateRows='repeat(3, 1fr)'>
					<Flex _hover={{ borderColor: "gray.300", boxShadow: "lg" }} h={"100%"} border={"1px solid"} borderColor={"gray.200"} onClick={() => { }} cursor={"pointer"} p={"1"} rounded={"lg"} boxShadow={"md"} flexDirection={"column"} justifyContent={"space-between"}>
						<Flex gap={"2"}>
							<Image
								borderRadius='lg'
								boxSize='50px'
								src='https://bit.ly/dan-abramov'
								alt='Dan Abramov'
								mb={"2"}
							/>
							<Text fontWeight={"bold"}>Project 01</Text>
						</Flex>
						<Box>
							<Text>Then there were a bunch of other medium/small players, such as variations of Bootstrap in React.</Text>
						</Box>
						<Flex flexDirection={"row-reverse"} gap={"2"}>
							<Badge colorScheme={"blue"} borderRadius={"lg"} fontSize={"10px"}>TypeScript</Badge>
							<Badge colorScheme={"blue"} borderRadius={"lg"} fontSize={"10px"}>TypeScript</Badge>
						</Flex>
					</Flex>
					<Flex _hover={{ borderColor: "gray.300", boxShadow: "lg" }} h={"100%"} border={"1px solid"} borderColor={"gray.200"} onClick={() => { }} cursor={"pointer"} p={"1"} rounded={"lg"} boxShadow={"md"} flexDirection={"column"}>
						<Flex gap={"2"}>
							<Image
								borderRadius='lg'
								boxSize='50px'
								src='https://bit.ly/dan-abramov'
								alt='Dan Abramov'
								mb={"2"}
							/>
							<Text fontWeight={"bold"}>Project 01</Text>
						</Flex>
						<Box>
							<Text>Then there were a bunch of other medium/small players, such as variations of Bootstrap in React.</Text>
						</Box>
					</Flex>
					<Flex _hover={{ borderColor: "gray.300", boxShadow: "lg" }} h={"100%"} border={"1px solid"} borderColor={"gray.200"} onClick={() => { }} cursor={"pointer"} p={"1"} rounded={"lg"} boxShadow={"md"} flexDirection={"column"}>
						<Flex gap={"2"}>
							<Image
								borderRadius='lg'
								boxSize='50px'
								src='https://bit.ly/dan-abramov'
								alt='Dan Abramov'
								mb={"2"}
							/>
							<Text fontWeight={"bold"}>Project 01</Text>
						</Flex>
						<Box>
							<Text>Then there were a bunch of other medium/small players, such as variations of Bootstrap in React.</Text>
						</Box>
					</Flex>
					<Flex _hover={{ borderColor: "gray.300", boxShadow: "lg" }} h={"100%"} border={"1px solid"} borderColor={"gray.200"} onClick={() => { }} cursor={"pointer"} p={"1"} rounded={"lg"} boxShadow={"md"} flexDirection={"column"}>
						<Flex gap={"2"}>
							<Image
								borderRadius='lg'
								boxSize='50px'
								src='https://bit.ly/dan-abramov'
								alt='Dan Abramov'
								mb={"2"}
							/>
							<Text fontWeight={"bold"}>Project 01</Text>
						</Flex>
						<Box>
							<Text>Then there were a bunch of other medium/small players, such as variations of Bootstrap in React.</Text>
						</Box>
					</Flex>
					<Flex _hover={{ borderColor: "gray.300", boxShadow: "lg" }} h={"100%"} border={"1px solid"} borderColor={"gray.200"} onClick={() => { }} cursor={"pointer"} p={"1"} rounded={"lg"} boxShadow={"md"} flexDirection={"column"}>
						<Flex gap={"2"}>
							<Image
								borderRadius='lg'
								boxSize='50px'
								src='https://bit.ly/dan-abramov'
								alt='Dan Abramov'
								mb={"2"}
							/>
							<Text fontWeight={"bold"}>Project 01</Text>
						</Flex>
						<Box>
							<Text>Then there were a bunch of other medium/small players, such as variations of Bootstrap in React.</Text>
						</Box>
					</Flex>
					<Flex _hover={{ borderColor: "gray.300", boxShadow: "lg" }} h={"100%"} border={"1px solid"} borderColor={"gray.200"} onClick={() => { }} cursor={"pointer"} p={"1"} rounded={"lg"} boxShadow={"md"} flexDirection={"column"}>
						<Flex gap={"2"}>
							<Image
								borderRadius='lg'
								boxSize='50px'
								src='https://bit.ly/dan-abramov'
								alt='Dan Abramov'
								mb={"2"}
							/>
							<Text fontWeight={"bold"}>Project 01</Text>
						</Flex>
						<Box>
							<Text>Then there were a bunch of other medium/small players, such as variations of Bootstrap in React.</Text>
						</Box>
					</Flex>
				</Grid>
			</Flex>
			<Flex p={"4"} h={"10vh"} bg={"gray.100"} justifyContent={"center"} alignItems={"center"}>
				<Text>
					Designed by Guilherme Amorim - {timeNow} - Made with <Link target={"_blank"} href="https://chakra-ui.com/">Chakra UI</Link> in <Link target={"_blank"} href="https://nextjs.org/">Next.js</Link>
				</Text>
			</Flex>
		</Flex>
	);
}
