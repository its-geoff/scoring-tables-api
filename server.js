// initializing dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;

// telling the server to accept any incoming data in JSON format only
app.use(express.json());

// connecting to MongoDB database
mongoose
   .connect(uri || "mongodb://localhost:27017/post", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => console.log("Connected to MongoDB"))
   .catch((err) => console.log(err));

app.get("/", (req, res) => {
   res.send("Welcome to Scoring Tables API.");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const marksRouter = require("./routes/marks");
app.use("/marks", marksRouter);
