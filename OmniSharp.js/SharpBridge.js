var phantom = require("phantom")
var globalPage
var Bridge = {}
var initialized = false

Bridge.SimpleSend = function(propertyTypeId,amount,cb){
	bridgeCall("createSimpleSendHex",[propertyTypeId,amount], function(result){
		return cb(result)
	})
}

Bridge.SendToOwners = {}
Bridge.IssueProperty = {}
Bridge.GrantProperty = {}

Bridge.SimpleSend(1,1, function() {})

exports.Bridge = Bridge

function init(cb) {
	if (initialized)
		cb()
	phantom.create(function (ph) {
		ph.createPage(function (page) {
		globalPage = page		  
			page.open("./Includes/Index.html", function () {
				page.onConsoleMessage(function(msg) { 
					if (msg === "Loaded") {
						cb()						
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

function bridgeCall(method,args,cb){
	init(function(){
		var func = new Function(createFunctionString(method,args))
		globalPage.evaluate( func , function (result) {
			return cb(result)
		})
	})	
}

function createFunctionString(method,args) {
	return "return builder."+method+"("+concat(args,",")+")"
}

function concat(args,separator) {
    var combinedArgs = Array.prototype.slice.call(args, 0)
    return combinedArgs.join(separator)
}

