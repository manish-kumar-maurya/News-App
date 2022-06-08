const express = require("express");
const router = express.Router();

//post model
const Post = require("../../../models/posts/postModel");

//user model
// const user = require("../../../models/users/usersModel");

router.use(express.json());

const getPosts = async (req, res) => {
  const skip = req.query.skip ? Number(req.query.skip) : 0;
  const DEFAULT_LIMIT = 10;

  try {
    const posts = await Post.find({}).skip(skip).limit(DEFAULT_LIMIT);
    res.status(200).json({
      success:true,
      data:posts})

    // const timeline = [...posts, ...friendsposts];
    // res.status(200).json(timeline);
  } catch (err) {
    console.log(err);
    res.status(400).json(`Error getting posts : ${erro.message}`);
  }
};

module.exports = getPosts;
