Webservice.js
=============

A simple Web service wrapper library.

I got kind of tired using JQuery to make all my HTTP requests in JavaScript. 
I decided to build this tiny, simple JavaScript library which can be used to call Web services using HTTP GET or HTTP POST.

Want to know how to use it? Pretty simple.

		service = new webservice();
		options = {
			url: "http://ip.jsontest.com/",
			error: function(err) {
				document.getElementById('pageContent').innerText = err;
			},
			success: function(msg) {
				document.getElementById('pageContent').innerText = msg;
			}
		};
		
		service.call(options);
		
the options object currently caters for the following properties:
> url
> method (http method ie. GET, POST, PUT, DELETE)
> error (on error callback)
> success (on success callback)
> headers (object containing key-value pairs of valid http headers)
> body (post body)

example:

		options = {
			url: "http://ip.jsontest.com/",
			method: "GET",
			error: function(err) {
				document.getElementById('pageContent').innerText = err;
			},
			success: function(msg) {
				document.getElementById('pageContent').innerText = msg;
			},
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json"
			},
			body: null
		};