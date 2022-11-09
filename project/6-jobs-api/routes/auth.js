const express = require("express")
const { login, register } = require("../controllers/auth")
const router = express.Router()

const {login, register} = require("../controllers/auth")

router.post("/register", register)
router.post("/login", login)

module.exports = router