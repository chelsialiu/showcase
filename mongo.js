require("dotenv").config();
const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.env.DB_PASSWORD;
const username = process.env.DB_USERNAME;
const db_name = process.env.DB_NAME;

const url = `mongodb+srv://${username}:${password}@cluster0.hg4yv.mongodb.net/${db_name}?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const quoteSchema = new mongoose.Schema({
  text: String,
  favorite: Boolean,
  upVotes: Number,
  author: String,
});

const Quote = mongoose.model("Quote", quoteSchema);

Quote.find({}).then((result) => {
  result.forEach((quote) => {
    console.log("quote", quote);
  });
  mongoose.connection.close();
});
