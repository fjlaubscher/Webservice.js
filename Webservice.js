// =============================================
// Author: Francois Laubscher
// Date: 2014-07-01
// Description: JSON Webservice helper class
// =============================================

function WebService(url) {
    this.serviceUrl = url;
    this.CallService = function (method, msgBody, onSuccess, onFail) {

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open(method, this.serviceUrl, true);
        // fire this event whenever the service state changes
        xmlHttp.onreadystatechange = function () {
            switch (xmlHttp.readyState) {
                case 0:
                    // request not initialized
                    // onFail
                    onFail("request not initialized.");
                    break;
                case 4:
                    // request finished and response is ready
                    if (xmlHttp.status == 200) {
                        // response from server is ok
                        onSuccess(xmlHttp.responseText);

                    } else {
                        // anything else failed
                        onFail("Error calling service. Status code: " + xmlHttp.status);
                    }
                    break;
            }
        }

        // finally send the request
        xmlHttp.send(msgBody);
    }
}

// This function calls the web service by using HTTP GET
// onSuccess: on success callback function
// onFail: on fail callback function
WebService.prototype.httpGET = function (onSuccess, onFail) {
    this.CallService("GET", null, onSuccess, onFail);
}

// This function sends a message to the web service by using HTTP POST
// message: message to send
// onSuccess: on success callback function
// onFail: on fail callback function
WebService.prototype.httpPOST = function (message, onSuccess, onFail) {
    this.CallService("POST", message, onSuccess, onFail);
}
