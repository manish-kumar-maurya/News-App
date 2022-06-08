const express = require("express");
const router = express();
const bcrypt = require("bcrypt");

router.use(express.json());

const test = true;
let total = 100;

//user model
const User = require("../../../models/users/usersModel");

const updateUser = async(req, res) => {
  try {
    
    const { userName, email,password, phoneNumber } = req.body;
    
    let findUser = await User.findOne({ userName: req.body.userName, email:req.body.email });
    // console.log(findUser)
    //cheking for updating values and seting to the findUser object

    // userName ? (findUser.userName = userName) : null;
    // email ? (findUser.email = email) : null;
    
    if (password) {
      //converting new pass to hash code
      bcrypt.genSalt(10, (err, salt)=> {
        bcrypt.hash(password, salt, async(err, hash)=> {
            if(err) throw err;

            // Store hash in your password DB.
            findUser.password = hash;
              
        });
    });

  }

    phoneNumber ? (findUser.phoneNumber = phoneNumber) : null;

    // console.log("findUser =======>",findUser)

    //updating user
    const updatedUser = await User.findByIdAndUpdate(
      findUser._id,
      {
        $set: findUser,
      }
    );
      console.log(updatedUser)
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json("bad request");
  }
};

module.exports = updateUser;
