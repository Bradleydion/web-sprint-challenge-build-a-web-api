const projects = require("../projects/projects-model")

function checkProjectsID(){
    return(req,res,next)=>{
        projects.get(req.params.id)
            .then((project)=>{
                if (project){
                    req.project=project
                    next()
                }else {
                    res.status(404).json({message:"Error project not found"})
                }
            }).catch((error)=>{
                console.log(error)
                res.status(500).json({
                    message:"There was an error getting the data "
                })
            })
    }
}
function checkProjectData(){
    return (req,res,next)=>{
        console.log("error from the middle ware",req.body)
        if (!req.body.name||!req.body.description){
            return res.status(400).json({
                message:"Missing description or name"
            })
        }
        next()
    }
}
module.exports ={
    checkProjectsID,
    checkProjectData
}