import { useState } from "react";
import { Container, VStack, Heading, Input, Button, useToast } from "@chakra-ui/react";

const DeletePost = () => {
  const [postId, setPostId] = useState("");
  const toast = useToast();

  const handleDelete = () => {
    if (postId) {
      // Here you would normally handle the post deletion, e.g., send a request to a server
      console.log("Delete Post:", { postId });
      toast({
        title: "Post deleted.",
        description: `Post with ID ${postId} has been deleted.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setPostId("");
    } else {
      toast({
        title: "Error.",
        description: "Post ID cannot be empty.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Delete a Post</Heading>
        <Input
          placeholder="Post ID"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          size="lg"
        />
        <Button colorScheme="red" size="lg" onClick={handleDelete}>
          Delete
        </Button>
      </VStack>
    </Container>
  );
};

export default DeletePost;