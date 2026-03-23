// initializing dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;
const marksRouter = require("./routes/marks");

// telling the server to accept any incoming data in JSON format only
app.use(express.json());
app.use(cors());

// connecting to MongoDB database
mongoose
   .connect(uri || "mongodb://localhost:27017/post", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      console.log("Connected to MongoDB");
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
   })
   .catch((err) => console.log(err));

app.get("/", (req, res) => {
   res.send("Welcome to Scoring Tables API.");
});

app.use("/marks", marksRouter);
