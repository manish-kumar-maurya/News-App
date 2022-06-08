const express = require("express");
const router = express.Router();

router.use(express.json());

const getPosts = require("./models/getAllPosts.js");
const createPost = require("./models/createPost");
const deletePost = require("./models/deletePost");

//Select API

router.get("/", (req, res) => getPosts(req, res));
router.post("/", (req, res) => createPost(req, res));
router.delete("/:id", (req, res) => deletePost(req, res));

module.exports = router;
