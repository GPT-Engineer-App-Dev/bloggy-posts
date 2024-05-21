import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Text fontSize="xl">A place to share your thoughts and ideas</Text>
        <Box>
          <Button colorScheme="teal" size="lg" onClick={() => navigate('/new-post')}>
            Add New Post
          </Button>
          <Button colorScheme="red" size="lg" onClick={() => navigate('/delete-post')} ml={4}>
            Delete Post
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;