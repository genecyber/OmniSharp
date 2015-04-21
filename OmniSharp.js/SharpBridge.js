var phantom = require("phantom")
var globalPage
var Bridge = {}
var initialized = false

Bridge.initialized = function (cb) {
    if (!initialized)
        init(function() {
            return cb(initialized);
        })
    else {
        return cb(initialized)
    }
}

Bridge.SimpleSend = function(propertyTypeId,amount,cb){
    bridgeCall("createSimpleSendHex", [propertyTypeId, amount], function (result) {
        console.log("almost done")
		return cb(result)
	})
}

Bridge.SendToOwners = {}
Bridge.IssueProperty = {}
Bridge.GrantProperty = {}

//Bridge.SimpleSend(1,1, function() {})

exports.Bridge = Bridge

function init(cb) {
	if (initialized)
		return cb()
	phantom.create(function (ph) {
		ph.createPage(function (page) {
		globalPage = page		  
			page.open("./Includes/Index.html", function () {
			    page.onConsoleMessage(function (msg) {
                    console.log("ack got msg")
				    if (msg === "Loaded") {
                        initialized = true
						return cb()						
					}
				})
			})		
	  })
	}, {
	  dnodeOpts: {
		weak: false
	  }
	});
}

function bridgeCall(method, args, cb) {
    console.log("bridge")
    init(function () {
        console.log("init")
		var func = new Function(createFunctionString(method,args))
		globalPage.evaluate(func, function (result) {
		    console.log("eval")
			return cb(result)
		})
	})	
}

function createFunctionString(method, args) {
    console.log(args)
    var func = "return builder." + method + "(" + concat(args, ",") + ")";
    console.log(func)
    return func
}

function concat(args,separator) {
    var combinedArgs = Array.prototype.slice.call(args, 0)
    return combinedArgs.join(separator)
}

