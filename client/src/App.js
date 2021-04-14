import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import CourseNotes from "./pages/course-notes";
import LessonsLearned from "./pages/lessons-learned";
import TechStackArchitecture from "./pages/tech-stack-architecture";
import Demo from "./pages/demo";
import { Flex, Box } from "@chakra-ui/react";

function App() {
  const padding = {
    padding: 5,
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg={["white"]}
      boxShadow="lg"
      zIndex="3"
      minH="95px"
      h={{ base: "15vw", md: "12vw", lg: "9vw", xl: "6vw" }}
      position="fixed"
    >
      <Box w="100%" p="10px">
        <Router>
          <div>
            <Link style={padding} to="/home">
              Home
            </Link>
            <Link style={padding} to="/course-notes">
              Course Notes
            </Link>
            <Link style={padding} to="/lessons-learned">
              Lesssons Learned
            </Link>
            <Link style={padding} to="/tech-stack-architecture">
              Tech Stack and Architecture
            </Link>
            <Link style={padding} to="/demo">
              Demo
            </Link>
          </div>

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/course-notes">
              <CourseNotes />
            </Route>
            <Route path="/lessons-learned">
              <LessonsLearned />
            </Route>
            <Route path="/tech-stack-architecture">
              <TechStackArchitecture />
            </Route>
            <Route path="/demo">
              <Demo />
            </Route>
          </Switch>
        </Router>
      </Box>
    </Flex>
  );
}

export default App;
