Webservice.js
=============

A simple Web service wrapper library.

I got kind of tired using JQuery to make all my HTTP requests in JavaScript. 
I decided to build this tiny, simple JavaScript library which can be used to call Web services using HTTP GET or HTTP POST.

It probably sucks, but it works for me :D

Want to know how to use it? Pretty simple, check.

	function Test_GET(){
		// you dont have to specify a content type unless your service requires it to be set. a default of "text/plain;charset=UTF-8" is used
		var headers = {
            "Accept": "application/json;",
            "Content-Type": "application/json;",
		};

		var webService = new WebService("<url_goes_here>", headers);

		webService.GET(function (result) {
			// you might want to parse the JSON / XML here
			alert(result);
		}, function (error){
			alert(error);
		});
	}
	
	function Test_POST(){
		var headers = {
            "Accept": "application/json;",
            "Content-Type": "application/json;",
		};

		var webService = new WebService("<url_goes_here>", headers);
		var object = { FirstName: 'Foo', LastName: 'Bar' };


		webService.POST(JSON.stringify(object), function (result) {
			// you might want to parse the JSON / XML here
			alert(result);
		}, function (error){
			alert(error);
		});
	}
