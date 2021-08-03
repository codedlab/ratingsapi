const express = require("express");
const router = express.Router();
const {
  execCreatePost,
  execPostDel,
  execEditPost,
} = require("../controller/post");

router.put("/editpost/:postid", execEditPost);

router.delete("/delete/:postid", execPostDel);

router.post("/createpost", execCreatePost);

module.exports = router;
