// Write your "actions" router here!
const express = require("express")
const actions = require("./actions-model")
const router = express.Router()
const { checkActionsID}= require("../middleware/actions")

router.get("/actions",(req,res,next)=>{
   actions.get()
   .then((action)=>{
       res.json(action)
   })
   .catch((error)=>{
       next(error)
   })
})
router.get("/actions/:id",checkActionsID(),(req,res,next)=>{
   res.json(req.action)
 })


module.exports = router
