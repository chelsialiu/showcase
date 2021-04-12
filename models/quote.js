const mongoose = require("mongoose");
const url = process.env.DB_URI;

console.log("Connecting to MongoDB");

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });

// Tells Mongoose how the quote objects are to be stored in the database
const quoteSchema = new mongoose.Schema({
  text: String,
  favorite: Boolean,
  upVotes: Number,
  author: String,
});

const Quote = mongoose.model("Quote", quoteSchema);

// Don't return the mongo __id field to the frontend
quoteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.id;
  },
});

module.exports = mongoose.model("Quote", quoteSchema);
