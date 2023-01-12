const express = require("express");
const router = express.Router();
const Marks = require("../models/marks");

// direct user towards men's or women's marks
router.get("/", async (req, res) => {
   res.json({
      message: "type '/men' for men's marks and '/women' for women's marks",
   });
});

// get all men's marks
router.get("/men/", async (req, res) => {
   try {
      const marks = await Marks.find({ _id: { $lte: 1400 } });
      res.json(marks);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

// get a men's mark through its id
router.get("/men/:postID", function (req, res) {
   // Extracting postID from URL
   const postID = req.params.postID;
   // Getting post with given ID
   Marks.findOne({ _id: postID }, function (err, post) {
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

// get all women's marks
router.get("/women/", async (req, res) => {
   try {
      const marks = await Marks.find({ _id: { $gt: 1400 } });
      res.json(marks);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

// get a women's mark through its id
router.get("/women/:postID", function (req, res) {
   // Extracting postID from URL
   const postID = Number(req.params.postID) + 1400;
   // Getting post with given ID
   Marks.findOne({ _id: postID }, function (err, post) {
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

// delete one post
router.delete("/:postID", getID, async (req, res) => {
   try {
      await res.marks.remove();
      res.json({ message: "Deleted marks" });
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

async function getID(req, res, next) {
   let marks;
   try {
      marks = await Marks.findById(req.params.postID);
      if (id == null) {
         return res.status(404).json({ message: "Cannot find marks" });
      }
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }

   res.marks = marks;
   next();
}

module.exports = router;
