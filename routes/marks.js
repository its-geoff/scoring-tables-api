const express = require("express");
const router = express.Router();
const Marks = require("../models/marks");

// get all posts
router.get("/", async (req, res) => {
   try {
      const marks = await Marks.find();
      res.json(marks);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

// get a post through its id
router.get("/:postID", function (req, res) {
   // Extracting postID from URL
   const postID = req.params.postID;
   // Getting post with given ID
   Marks.findOne({ id: postID }, function (err, post) {
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

// creating one post
router.post("/", async (req, res) => {
   const marks = new Marks({
      "100m": req.body.one,
      "200m": req.body.two,
      "400m": req.body.four,
      "110mh": req.body.s_hurdles,
      "400mh": req.body.l_hurdles,
      "4x100m": req.body.o_relay,
      "4x400m": req.body.f_relay,
      "800m": req.body.eight,
      "1600m": req.body.sixteen,
      "3200m": req.body.thirty_two,
   });

   try {
      const newMarks = await marks.save();
      res.status(201).json(newMarks);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
});

// updating one post
router.patch("/:postID", getID, async (req, res) => {
   if (req.body.one != null) {
      res.marks.one = req.body.one;
   }
   if (req.body.two != null) {
      res.marks.two = req.body.two;
   }
   if (req.body.four != null) {
      res.marks.four = req.body.four;
   }
   if (req.body.s_hurdles != null) {
      res.marks.s_hurdles = req.body.s_hurdles;
   }
   if (req.body.l_hurdles != null) {
      res.marks.l_hurdles = req.body.l_hurdles;
   }
   if (req.body.o_relay != null) {
      res.marks.o_relay = req.body.o_relay;
   }
   if (req.body.f_relay != null) {
      res.marks.f_relay = req.body.f_relay;
   }
   if (req.body.eight != null) {
      res.marks.eight = req.body.eight;
   }
   if (req.body.sixteen != null) {
      res.marks.sixteen = req.body.sixteen;
   }
   if (req.body.thirty_two != null) {
      res.marks.thirty_two = req.body.thirty_two;
   }
   try {
      const updatedMarks = await res.marks.save();
      res.json(updatedMarks);
   } catch (err) {
      res.status(400).json({ message: err.messsage });
   }
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
