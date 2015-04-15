var Bridge = require("./SharpBridge").Bridge
var express = require("express")
var app = express()

app.get("/", function (req, res) {
    res.type("text/plain"); // set content-type
    Bridge.SimpleSend(1,1,function(result){
        res.json({ hex: result }); // send text response
    })
})

app.listen(process.env.PORT || 4730);
