const mongoose = require("mongoose");

const database = require("../../connection/dbConnection");

const postSchema = new mongoose.Schema(
  {
    thumbnailImage: {
      type: String,
      required : true
    },
    headline: {
      type: String,
      required:true
    },
    category: {
      type: String, 
      required:true
    },
    authorName : {
      type: String,
      required:true
    },
    uploadDate:{
      type: Date,
      default:Date.now(),  
    }
  }
);

module.exports = Post = mongoose.model("post", postSchema);