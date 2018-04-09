var bodyParser = require('body-parser');
var logGame = require("../models/LogGame").dataset;
var logResult = require("../models/LogResult").dataset;
var logStatus = require("../models/LogStatus").dataset;
var ObjectId = require('mongodb').ObjectID;
var moment = require('moment');
var unirest = require('unirest');

function addResult(game, result) {
    console.log("GAME: " + JSON.stringify(game));
    console.log("");
    console.log("RESULT: " + JSON.stringify(result));
    console.log("");
    console.log("NEXT");
    console.log("");

}

function updateGame(eventId) {
    var findGame = { "logGame.eventId": eventId };
    var findResult = { "logResult.0.eventId": eventId }; 

    logResult.find(findResult,{}).sort({}).exec(function (err, resultResult) {
        if (err) console.log("EXCEPTION IN FIND LOGG RESULT QUERY: " + err);
        try { var result = resultResult[0].logResult[0].item.runners; } catch(e) {}
        logGame.find(findGame).sort().exec(function (err, gameResult) {
            if (err) console.log("EXCEPTION IN FIND LOGG GAME QUERY: " + err);
            try { var game = gameResult[0].logGame; } catch(e) {}
            if (result && game) {
               addResult(game, result);
            }
        }); 
    });
}

module.exports = { run: function (app) {
    app.use(bodyParser.json());
    app.post("/addResultsToGames", function(req, res) {
        var eventIds = [28513622, 28513511]; 
        eventIds.map(id => {
            updateGame(id);
        });
        res.json({ process: "ignited" });
    })
}}
