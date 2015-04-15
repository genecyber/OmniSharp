var phantom = require('phantom')
var globalPage
var Bridge = {}
var initialized = false

Bridge.SimpleSend = function(PropertyTypeId,Amount,cb){
	bridgeCall("createSimpleSendHex",[propertyTypeId,Amount], function(result){
		return cb(result)
	})
}

Bridge.SendToOwners = {}
Bridge.IssueProperty = {}
Bridge.GrantProperty = {}

exports.Bridge = Bridge

function init(cb) {
	if (initialized)
		cb()
	phantom.create(function (ph) {
		ph.createPage(function (page) {
		globalPage = page		  
			page.open("./Includes/Index.html", function (status) {
				page.onConsoleMessage(function(msg) { 
					if (msg == "Loaded") {
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

function concat(arguments,separator) {
  var args = Array.prototype.slice.call(arguments, 0)
  return args.join(separator)
}

