import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Grid,
  Box,
  Container,
  Flex,
  Button,
  Text,
  Divider,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { StarIcon, TriangleUpIcon } from "@chakra-ui/icons";

const config = {
  // Uncomment for local testing purposes
  apiUrl: "http://localhost:3001/api/quotes",

  // Uncomment for production build and deployment
  // apiUrl: "/api/quotes",
};

function Demo() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [quoteOfTheDay, setQuoteOfTheDay] = useState({});
  const [today, setToday] = useState("");
  const [buttonIsDisabled, setDisableButton] = useState(false);
  const [hasSeenQOD, setHasSeenQOD] = useState(false);
  const [showAllQuotes, setShowAllQuotes] = useState(false);

  // TO DO: Load quotes on page load with useEffect
  // useEffect(() => {
  //   let mounted = true;
  //   getQuotes().then((quotes) => {
  //     if (mounted) {
  //       setQuotes(quotes);
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);

  const Quote = ({ text, author }) => {
    return (
      <Box w="100%" h="100%" bg="blue.500" textAlign="center">
        {text} <br />
        <br /> {author}
      </Box>
    );
  };

  const getQuotes = () => {
    setQuotes([]);
    setIsLoading(true);
    console.log("getting quotes in client/App.js");
    fetch(config.apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const getDailyQuote = () => {
    getDate();
    getQuotes();
    if (quotes.length > 0) {
      let randomNum = Math.floor(Math.random() * quotes.length);
      let dailyQuote = quotes[randomNum];
      if (dailyQuote.author == null) {
        dailyQuote.author = "Anonymous";
      }
      setQuoteOfTheDay(dailyQuote);
      setHasSeenQOD(true);
      setIsLoading(false);
    }
  };

  const favorite = (quote) => {
    console.log("faved quote", quote);
    // setIsFavorite(true);
    quote.favorite = true;
    // console.log("favorited!", isFavorite);
    console.log("faved quote after", quote);
  };

  const upVote = (quote) => {
    // setNumUpVotes(numUpVotes + 1);
    console.log("upVoted", quote);
  };

  const getDate = () => {
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    let today = cMonth + "/" + cDay + "/" + cYear;
    setToday(today);
  };

  const showQuotes = () => {
    setShowAllQuotes(true);
    getQuotes();
  };

  const hideQuotes = () => {
    setShowAllQuotes(false);
  };

  return (
    <Container maxWidth="100vm" backgroundColor="turquoise">
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
        Quote of the Day
      </Heading>
      <Container minW="100vh" minH="50vh" centerContent padding="2vh">
        <Heading as="h3" color="white" padding="3vh">
          {today}
        </Heading>
        <Divider />
        <Text
          fontSize="4xl"
          textAlign="center"
          color="gray.600"
          paddingTop="2vh"
        >
          {quoteOfTheDay.text}
        </Text>
        <Text
          fontSize="2xl"
          textAlign="center"
          color="gray.600"
          paddingTop="2vh"
          paddingBottom="2vh"
        >
          {quoteOfTheDay.author}
        </Text>
        <HStack spacing="10px">
          {isLoading ? (
            <Button disabled={isLoading}>See Today's Quote</Button>
          ) : (
            <Button onClick={() => getDailyQuote()} disabled={hasSeenQOD}>
              See Today's Quote
            </Button>
          )}
          {showAllQuotes ? (
            <Button onClick={() => hideQuotes()}>Hide Quotes</Button>
          ) : (
            <Button onClick={() => showQuotes()}>Show More Quotes</Button>
          )}
          {/* <Button
              onClick={() => favorite({ quoteOfTheDay })}
              disabled={isLoading}
              leftIcon={<StarIcon />}
            >
              Favorite
            </Button>
            <Button
              onClick={() => upVote({ quoteOfTheDay })}
              disabled={isLoading}
              leftIcon={<TriangleUpIcon />}
            >
              Up Vote
            </Button> */}
        </HStack>
      </Container>
      {showAllQuotes ? (
        <Flex backgroundColor="black">
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {quotes.map((quote) => (
              <Quote text={quote.text} author={quote.author}></Quote>
            ))}
          </Grid>
        </Flex>
      ) : (
        <span></span>
      )}
    </Container>
  );
}

export default Demo;
