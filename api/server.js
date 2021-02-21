const express = require('express');
const server = express();
const welcome = require("./actions/welcome-router")
const actions = require("./actions/actions-router")

// Complete your server here!
// Do NOT `server.listen()` inside this file!

server.use(welcome)
server.use(actions)

server.use((err, req,res,next)=>{
    console.log(err)
    res.status(500).json({message:"Danger Will Robinson something is wrong!!!"})
})
module.exports = server;
