const express = require("express")
const router = express.Router()
router.get("/",(req, res)=>{
    res.json({message:"Welcome to the web sprint challenge 'build a web api'"})
})
module.exports = router