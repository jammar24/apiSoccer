const express = require("express")

const soccerPlayerController = require("./../controllers/soccerPlayer.controllers")

const router = express.Router()

router
.post("/", soccerPlayerController.createSoccerPlayer)

module.exports =router ;