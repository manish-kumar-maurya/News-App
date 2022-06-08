const express = require("express");
const router = express.Router();

router.use(express.json());

//post model

const Post = require("../../../models/posts/postModel");

const createPost = async (req, res) => {
  const { thumbnailImage, headline, category, authorName, uploadDate } = req.body;

  const newpost = new Post({
    thumbnailImage, headline, category, authorName
  });

  const createdPost = await newpost.save();
  !createdPost && res.status(500).json("unnable to create post");

  res.status(200).json(createdPost);
};

module.exports = createPost;
