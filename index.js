require("dotenv").config(); // Environment variables from .env file are globally available before code
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

// Allow requests from other origins by using cors middleware
app.use(cors());

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

const Quote = require("./models/quote");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

/// QUOTES ///
app.get("/api/quotes", (request, response) => {
  Quote.find({}).then((quotes) => {
    response.json(quotes);
  });
});

app.post("/api/quotes", function (request, response) {
  const body = request.body;

  if (body.text === undefined) {
    return response.status(400).json({ error: "content missing" });
  }

  const quote = new Quote({
    text: body.text,
    favorite: body.favorite,
    upVotes: body.upVotes,
    author: body.author,
  });

  quote.save().then((savedQuote) => {
    response.json(savedQuote);
  });
});

app.post("/api/saveQuote/:id", (request, response) => {
  Quote.findByIdAndUpdate(request.params.id).then((quote) => {
    response.json(quote);
  });
});
