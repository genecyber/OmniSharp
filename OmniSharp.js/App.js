var Bridge = require("./SharpBridge").Bridge
var express = require("express")
var app = express()

app.get("/", function (req, res) {
    Bridge.initialized(function (state) {
        if (state)
            res.json({ status: "initialized" })
        else {
            res.json({ statis: "error" })
        }
    })
})

app.get("/simpleSend/:propertyId/:amount", function (req, res) {
    Bridge.SimpleSend(req.params["propertyId"], req.params["amount"], function (result) {
        console.log("res result "+result)
        res.json({ hex: result }); // send text response
    })
})

/* 

*/
app.listen(process.env.PORT || 4730);
