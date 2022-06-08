const router = require("express").Router();

router.use(require("express").json());

const getUser = require("./modules/getUser");
const registerUser = require("./modules/registerUser");
const updateUser = require("./modules/updateUser");
const deleteUser = require("./modules/deleteUser");

// select API

router.get("/:username", (req, res) => getUser(req, res));
router.post("/",(req,res)=>registerUser(req,res))
router.put("/",(req,res)=>updateUser(req,res))
router.delete("/",(req,res)=>deleteUser(req,res))

module.exports = router;
