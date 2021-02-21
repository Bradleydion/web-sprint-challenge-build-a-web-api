// Write your "actions" router here!
const express = require("express")
const actions = require("./actions-model")
const router = express.Router()
const { checkActionsID, checkActionData}= require("../middleware/actions")


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

router.post("/actions/:id",checkActionsID(), checkActionData(), (req, res, next)=>{
    let body = req.params.body
    body["project_id"]= req.params.id
    actions.insert(body)
    .then((action)=>{
        console.log(action)
        res.status(201).json(action)
    })
    .catch((error)=>{
        next(error)
    })
})
module.exports = router
