import { Heading, Center, Box, Text, Link } from "@chakra-ui/react";

function Home() {
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
        Welcome to Chelsia's Final Project!
      </Heading>
      <Center>
        <Box
          w="80%"
          backgroundColor="gray.200"
          marginTop="2vh"
          marginLeft="2vh"
          padding="2vh"
        >
          <Text fontSize="2xl" textAlign="center">
            INTRODUCTION
            <Text fontSize="md" textAlign="center">
              This semester, I decided to do a self-study course about full
              stack development. I found this great course online (
              <Link
                color="blue"
                href="https://fullstackopen.com/en/"
                isExternal
              >
                "Deep Dive Into Modern Web Development"
              </Link>
              ) and have learned so much! This website was created to showcase
              the knowledge and skills I have attained.
            </Text>
          </Text>
          <br />
          <Text fontSize="2xl" textAlign="center">
            COURSE NOTES
            <Text fontSize="md" textAlign="center">
              This course was pretty thorough and I took notes on practically
              EVERYTHING. Check out screenshots of the notes from each of the
              modules.
            </Text>
          </Text>
          <br />
          <Text fontSize="2xl" textAlign="center">
            LESSONS LEARNED
            <Text fontSize="md" textAlign="center">
              I used to consider myself a "frontend developer", but this course
              helped me expand that to becoming more "fullstack". As such, there
              were a lot of things I learned and did for the first time during
              this full stack course. Check out the list of cool things!
            </Text>
          </Text>
          <br />
          <Text fontSize="2xl" textAlign="center">
            TECH STACK AND ARCHITECTURE
            <Text fontSize="md" textAlign="center">
              Understanding how all the various elements of a full stack
              application work and interact was something I sought dilligently
              to understand. Creating a tech stack and architecture diagram
              helped solidify the "big picture" of how it all works together.
            </Text>
          </Text>
          <br />
          <Text fontSize="2xl" textAlign="center">
            DEMO
            <Text fontSize="md" textAlign="center">
              Applying the concepts I learned in the course, I created my very
              own full stack application -- frontend, backend, and database!
              While it has very basic functionality, there are some pretty
              fascinating and powerful things happening behind the scenes.
            </Text>
          </Text>
        </Box>
      </Center>
    </>
  );
}
export default Home;
