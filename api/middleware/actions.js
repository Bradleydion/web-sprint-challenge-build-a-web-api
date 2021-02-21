const actions = require("../actions/actions-model")

function checkActionsID(){
    return(req,res,next)=>{
        actions.get(req.params.id)
            .then((action)=>{
                if (action){
                    req.action=action
                    next()
                }else {
                    res.status(404).json({message:"Error  action not found"})
                }
            }).catch((error)=>{
                console.log(error)
                res.status(500).json({
                    message:"There was an error getting the data "
                })
            })
    }
}

module.exports ={
    checkActionsID
}