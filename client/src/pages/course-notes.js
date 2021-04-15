import React, { useState } from "react";
import {
  Flex,
  Heading,
  SimpleGrid,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Button,
  useDisclosure,
  Center,
  Image,
} from "@chakra-ui/react";

import P0 from "../images/Part0.png";
import P1a from "../images/Part1a.png";
import P1b from "../images/Part1b.png";
import P1c from "../images/Part1c.png";
import P1d from "../images/Part1d.png";
import P2a from "../images/Part2a.png";
import P2c from "../images/Part2c.png";
import P2d from "../images/Part2d.png";
import P3a from "../images/Part3a.png";
import P3b from "../images/Part3b.png";
import P3c from "../images/Part3c.png";

function CourseNotes() {
  const modules = [
    {
      title: "Part 0",
      description: "Fundamentals of Web Apps",
      noteImg: P0,
    },
    {
      title: "Part 1a",
      description: "Introduction to React",
      noteImg: P1a,
    },
    {
      title: "Part 1b",
      description: "JavaScript",
      noteImg: P1b,
    },
    {
      title: "Part 1c",
      description: "Component state, event handlers",
      noteImg: P1c,
    },
    {
      title: "Part 1d",
      description: "A more complex state, debugging React apps",
      noteImg: P1d,
    },
    {
      title: "Part 2a",
      description: "Rendering a collection, modules",
      noteImg: P2a,
    },
    {
      title: "Part 2c",
      description: "Getting data from server",
      noteImg: P2c,
    },
    {
      title: "Part 2d",
      description: "Altering data in server",
      noteImg: P2d,
    },
    {
      title: "Part 3a",
      description: "Node.js and Express",
      noteImg: P3a,
    },
    {
      title: "Part 3b",
      description: "Deploying app to internet",
      noteImg: P3b,
    },
    {
      title: "Part 3c",
      description: "Saving data to MongoDB",
      noteImg: P3c,
    },
    // {
    //   title: "Part 7a",
    //   description: "React-router",
    //   // noteImg: {},
    // },
  ];

  const [selectedModal, setSelectedModal] = useState(0);
  const [module, setSelectedModule] = useState(modules);
  const openModal = (moduleIndex) => {
    setSelectedModal(moduleIndex);

    let modulesArray = [...module];
    modulesArray.map((m, index) => {
      if (moduleIndex == index) {
        modulesArray[index].isSelected = true;
      } else {
        modulesArray[index].isSelected = false;
      }
    });
    setSelectedModule(modulesArray);
    onOpen();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

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
        Course Notes
      </Heading>
      <SimpleGrid columns={3} spacing={10} padding={10}>
        {modules.map((module, index) => (
          <Flex bg="blue.100">
            <Box height="100px" padding="2vh" w="50%">
              <Text fontSize="xl" textAlign="center">
                {module.title}
              </Text>
              <Text fontSize="md" textAlign="center">
                {module.description}
              </Text>
            </Box>
            <Box w="50%">
              <Center>
                <Button
                  onClick={() => openModal(index)}
                  m={7}
                >{`See ${module.title} Notes`}</Button>
              </Center>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>

      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            NOTES for {modules[selectedModal].title} :
            <em> {modules[selectedModal].description}</em>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Image
                src={modules[selectedModal].noteImg}
                width="40%"
                objectFit="cover"
                maxHeight="60vh"
                marginTop="1em"
              />
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default CourseNotes;
