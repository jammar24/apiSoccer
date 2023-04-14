const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
 
const  playerRouter =require("./routes/soccerPlayer.routes")

const app = express()
app.use(express.json());

app.use("/api/v1/soccerplayer" ,playerRouter)

module.exports = app;
