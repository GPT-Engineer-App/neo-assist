// NeoBot News Website - A modern news platform for AI assistant enthusiasts
import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaRobot, FaNewspaper, FaRegClock, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center">
        <HStack spacing={4}>
          <Icon as={FaRobot} w={8} h={8} color="blue.500" />
          <Heading as="h1" size="xl">
            NeoBot News
          </Heading>
        </HStack>
        <HStack spacing={4}>
          <Button leftIcon={<FaTwitter />} colorScheme="twitter">
            Twitter
          </Button>
          <Button leftIcon={<FaFacebook />} colorScheme="facebook">
            Facebook
          </Button>
          <Button leftIcon={<FaInstagram />} colorScheme="pink">
            Instagram
          </Button>
        </HStack>
      </Flex>

      <VStack spacing={8} mt={10}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <HStack spacing={4} alignItems="center">
            <Image src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2l0eXxlbnwwfHx8fDE3MTM4NDAyNTF8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" borderRadius="full" />
            <VStack align="start">
              <Heading size="md">The Future of AI Assistants</Heading>
              <Text fontSize="sm">Discover how AI is transforming daily tasks and business operations.</Text>
              <HStack>
                <Icon as={FaRegClock} />
                <Text fontSize="xs">April 10, 2023</Text>
              </HStack>
            </VStack>
          </HStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <HStack spacing={4} alignItems="center">
            <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzEzNzYwODk5fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" borderRadius="full" />
            <VStack align="start">
              <Heading size="md">AI and Privacy: What You Need to Know</Heading>
              <Text fontSize="sm">An in-depth look at privacy concerns with the rise of intelligent machines.</Text>
              <HStack>
                <Icon as={FaRegClock} />
                <Text fontSize="xs">April 9, 2023</Text>
              </HStack>
            </VStack>
          </HStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <HStack spacing={4} alignItems="center">
            <Image src="https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGhhbmQlMjBodW1hbiUyMGhhbmR8ZW58MHx8fHwxNzEzODQwMjUyfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" borderRadius="full" />
            <VStack align="start">
              <Heading size="md">Human-AI Collaboration</Heading>
              <Text fontSize="sm">Exploring the synergistic relationship between humans and AI.</Text>
              <HStack>
                <Icon as={FaRegClock} />
                <Text fontSize="xs">April 8, 2023</Text>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
