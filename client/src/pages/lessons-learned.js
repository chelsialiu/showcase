import {
  Flex,
  Heading,
  Center,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
  Container,
  UnorderedList,
} from "@chakra-ui/react";

import { CheckCircleIcon } from "@chakra-ui/icons";

function LessonsLearned() {
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
        Lessons Learned
      </Heading>
      <Center>
        <Container minW="100vh" minH="50vh" centerContent padding="2vh">
          <Flex paddingBottom="3vh">
            <Text>
              Throughout this semester, I have been able to learn and do so many
              things for the first time:
              <Divider />
            </Text>
          </Flex>
          <Flex>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Definition of Full Stack Web Development
                <UnorderedList paddingLeft="3vh">
                  <ListItem>
                    Over the years, I have heard various definitions of "full
                    stack development", and I learned that typical web apps are
                    a bit different than full stack apps
                  </ListItem>
                  <ListItem>
                    Web apps typically have (at least) two “layers’: the
                    frontend/browser and the backend/server; however, full stack
                    usually entails a frontend, backend, and database
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                RESTful APIs
                <UnorderedList paddingLeft="3vh">
                  <ListItem>
                    REST stands for Representational State Transfer and is an
                    architectural style meant for building scalable web
                    applications
                  </ListItem>
                  <ListItem>
                    Singular things in an application are called resources in
                    RESTful thinking, and every resource has an associated URL
                    which is the resource’s unique address
                  </ListItem>
                  <ListItem>
                    We can execute different operations on resources, with the
                    operation to be executed defined by the HTTP verb GET, POST,
                    DELETE, PUT, and PATCH
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                .env files
                <UnorderedList paddingLeft="3vh">
                  <ListItem>
                    Hiding credentials and other sensitve information needs to
                    be done before publishing code to GitHub or hosting a site
                    live
                  </ListItem>
                  <ListItem>
                    Creating a .env file allows environment variables to be
                    declared and automatically used in various parts of the code
                    where access is necessary
                  </ListItem>
                  <ListItem>
                    I created my first .env file this semester and used it to
                    store information about database credentials
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Frontend production builds
                <UnorderedList paddingLeft="3vh">
                  <ListItem>
                    Needs to be deployed because this version of the application
                    is optimized for production
                  </ListItem>
                  <ListItem>
                    Unlike dev mode which is configured to give clear error
                    messages and immediate render code changes to the browser
                  </ListItem>
                  <ListItem>
                    Serve these static files (from the frontend production
                    build) from the backend repository
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                npm scripts
                <UnorderedList paddingLeft="3vh">
                  <ListItem>
                    There are dozens of built-in scripts in npm, each written
                    with the purpose of automating a reptitive task
                  </ListItem>
                  <ListItem>
                    I learned how to write my own scripts (i.e.
                    "heroku-postbuild" and a "dev" script that ran the command
                    for starting up nodemon)
                  </ListItem>
                  <ListItem>
                    These scripts were added to the "script" section of the
                    package.json file
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Proxy API Requests in Development
                <UnorderedList paddingLeft="3vh">
                  <ListItem>
                    If the code does an HTTP request to a server address NOT
                    managed by the application itself, the request is redirected
                    to the proxy address
                  </ListItem>
                  <ListItem>
                    This is specified by adding a proxy field to the
                    package.json file
                  </ListItem>
                </UnorderedList>
              </ListItem>
            </List>
          </Flex>
        </Container>
      </Center>
    </>
  );
}
export default LessonsLearned;
