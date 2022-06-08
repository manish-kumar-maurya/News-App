const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const URL = process.env.MONGODB_URL;

mongoose.connect("mongodb+srv://manish:Hsinam@1018@assignment.utbqf8l.mongodb.net/?retryWrites=true&w=majority", 
  // useCreateIndex: true,
  {
  useUnifiedTopology: true,
  useNewUrlParser: true},
  () => {
    console.log('Connected to MongoDB');
  }
);
