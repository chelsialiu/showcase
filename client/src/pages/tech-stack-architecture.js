import { Heading, Flex, Text, Box, Center, Image } from "@chakra-ui/react";
import TechStackImg from "../images/TechStack&Architecture.png";

function TechStackArchitecture() {
  return (
    <>
      <Heading
        as="h1"
        size="4xl"
        textAlign="center"
        padding="4vh"
        marginTop="3vh"
        color="white"
        backgroundColor="blue.700"
        w="100%"
      >
        Tech Stack & Architecture
      </Heading>
      <Flex>
        <Box
          w="40%"
          backgroundColor="gray.200"
          marginTop="2vh"
          marginLeft="2vh"
          padding="2vh"
        >
          <Text fontSize="3xl" textAlign="center">
            FRONTEND / BROWSER
          </Text>
          <Text textAlign="center">
            <em>React</em> is used to build single-page applications. I chose
            React because it allows reuse of components and it is a widely-used,
            up-and-coming programming language.
          </Text>
          <br />
          <Text fontSize="3xl" textAlign="center">
            BACKEND / SERVER
          </Text>
          <Text textAlign="center">
            <em>Node.js</em> is a server environment that opens a file on the
            server and then returns the content to the frontend. It is extremely
            powerful in that it handles requests asynchronously and allows for
            numerous functionalities (generate dynamic page content, CRUD
            operations, etc.).
            <br />
            <em>Express</em> is a backend server that provides better
            abstraction for general use cases. I chose this combination because
            Node.js and Express are extremely easy to use and set up, perfect
            for a simple demo app.
          </Text>
          <br />
          <Text fontSize="3xl" textAlign="center">
            DATABASE
          </Text>
          <Text textAlign="center">
            <em>MongoDB</em> is a non-relational, document-oriented database. It
            does not require strongly-defined database schemas for each object
            (NoSQL). The cluster is hosted remotely on MongoDB Atlas (cloud
            database servicer provider).
            <em> Mongoose</em> is an object document mapper (ODM) that saves
            JavaScript objects as Mongo documents; it models application data. I
            chose MongoDB because the data used for the demo is very basic and
            did not require extensive querying and strongly-defined schemas like
            SQL databases do.
          </Text>
        </Box>
        <Box w="60%">
          <Center>
            <Image
              src={TechStackImg}
              width="100%"
              objectFit="cover"
              maxHeight="60vh"
              marginTop="1em"
            />
          </Center>
        </Box>
      </Flex>
    </>
  );
}
export default TechStackArchitecture;
