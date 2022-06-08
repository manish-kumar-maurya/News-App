const router = require("express").Router();

//for body-parser
router.use(require("express").json());

const login = require("./modules/login");

//select API

router.post("/login", (req, res) => login(req, res)); // => login

module.exports = router;
