const express = require("express");
const mongoose = require("mongoose");

// Creating a server instance
const app = express();
const PORT = process.env.PORT || 3000;

// Telling the server to accept any incoming data in JSON format only
app.use(express.json());

// Connecting to MongoDB database
mongoose
   .connect("mongodb://localhost:27017/post", {
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

// adds a new post to the database
app.post("/posts", function (req, res) {
   // Destrucutring i.e. extracting the data from req.body
   const {
      id,
      one,
      two,
      four,
      s_hurdles,
      l_hurdles,
      o_relay,
      f_relay,
      eight,
      sixteen,
      thirty_two,
   } = req.body;
   // Creating a new Post object
   const post = new Post({
      id: id,
      one: one,
      two: two,
      four: four,
      s_hurdles: s_hurdles,
      l_hurdles: l_hurdles,
      o_relay: o_relay,
      f_relay: f_relay,
      eight: eight,
      sixteen: sixteen,
      thirty_two: thirty_two,
   });
   /*  Saving the new post object into the database. This
        returns the newly saved mongodb document.
    */
   post.save(function (err, newPost) {
      if (err) {
         /*  If any error occurs while saving the document,
                return the error message
            */
         return res.status(500).json({ error: err.message });
      }
      // Else return message 'Post saved'
      res.status(200).json({ msg: "Post saved" });
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

// updates post details (marks needed for a point value)
app.put("/posts/:postID", function (req, res) {
   // Extracting postID from URL
   const postID = req.params.postID;
   const {
      one,
      two,
      four,
      s_hurdles,
      l_hurdles,
      o_relay,
      f_relay,
      eight,
      sixteen,
      thirty_two,
   } = req.body;
   Post.findOneAndUpdate(
      { id: postID },
      { one: one },
      { two: two },
      { four: four },
      { s_hurdles: s_hurdles },
      { l_hurdles: l_hurdles },
      { o_relay: o_relay },
      { f_relay: f_relay },
      { eight: eight },
      { sixteen: sixteen },
      { thirty_two: thirty_two },
      function (err, post) {
         if (err) {
            /* If any error occurs getting the document, then
               return the error message
            */
            return res.status(500).json({ error: err.message });
         }
         // Else return msg "Marks updated"
         res.status(200).json({ msg: "Marks updated" });
      }
   );
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
