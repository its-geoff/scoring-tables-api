const express = require("express");
const mongodb = require("mongodb");

// Creating a server instance
const app = express();
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;

// Telling the server to accept any incoming data in JSON format only
app.use(express.json());

// Connecting to MongoDB database
mongodb
   .connect(uri || "mongodb://localhost:27017/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => console.log("Connected to MongoDB"))
   .catch((err) => console.log(err));

app.get("/", (req, res) => {
   res.send("Welcome to Scoring Tables API.");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Importing the Post schema
const Post = require("./models/Post");

// retrieves all of the posts in the database
app.get("/posts", function (req, res) {
   // Finding all posts in the database
   Post.find(function (err, posts) {
      if (err) {
         /*  If any error occurs while getting the documents,
                return the error message
            */
         return res.status(500).json({ error: err.message });
      }
      // Else return posts
      res.status(200).json({ posts: posts });
   });
});

// get a post through its id
app.get("/posts/:postID", function (req, res) {
   // Extracting postID from URL
   const postID = req.params.postID;
   // Getting post with given ID
   Post.findOne({ id: postID }, function (err, post) {
      if (err) {
         /* If any error occurs getting the document, then
               return the error message
            */
         return res.status(500).json({ error: err.message });
      }
      // Else return post
      if (post == null) return res.status(200).json({ msg: "No post found" });
      res.status(200).json(post);
   });
});

// deletes selected post from database
app.delete("/posts/:postID", function (req, res) {
   // Extracting postID from URL
   const postID = req.params.postID;
   Post.deleteOne({ id: postID }, function (err) {
      if (err) {
         /* If any error occurs getting the document, then
               return the error message
            */
         return res.status(500).json({ error: err.message });
      }
      // Else return msg "Post deleted"
      res.status(200).json({ msg: "Post deleted" });
   });
});

exports.handler = async (event) => {
   const response = {
      statusCode: 200,
      headers: {
         "Access-Control-Allow-Headers": "Content-Type",
         "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
         "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      },
      body: JSON.stringify("Hello from Lambda!"),
   };
   return response;
};
