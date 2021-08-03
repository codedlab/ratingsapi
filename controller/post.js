const postModel = require("../models/post");
const mongoose = require("mongoose");

exports.execPostDel = (req, res) => {
  const poster = req.params.postid;
  console.log(poster);
  postModel.findByIdAndRemove(poster, (err, result) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    res.json({ message: "Post has been deleted" });
  });
};

exports.execCreatePost = (req, res) => {
  const post = new postModel({
    _id: new mongoose.Types.ObjectId(),
    post: req.body.post,
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "created post request",
        createdPost: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
};

exports.execEditPost = (req, res) => {
  const editorid = req.params.postid;
  console.log(editorid);
  postModel.findOneAndUpdate(
    { _id: editorid },
    { $set: { post: req.body.post } },
    (err, data) => {
      if (err) {
        return res.status(400).json({ error: errHandler(err) });
      }
      res.json(data);
    }
  );
};
