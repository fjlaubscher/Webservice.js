// ==========================================================================
// Author: Francois Laubscher
// Date: 2014-07-02
// Description: Webservice wrapper library
// Update: 2015-05-11, Francois Laubscher - updated filename and use options instead
// ==========================================================================

// constructor
function webservice() {

}

// Call Service
// method: POST/GET
// msgBody: POST content
// onSuccess: success method
// onFail: fail method
webservice.prototype.call = function (options) {
    var xmlHttp = new XMLHttpRequest();

    // fire this event whenever the service state changes
    xmlHttp.onreadystatechange = function () {
        switch (xmlHttp.readyState) {
            case 0:
                // request not initialized
                // onFail
                options.error("request not initialized.");
                break;
            case 4:
                // request finished and response is ready
                if (xmlHttp.status >= 200 && xmlHttp.status < 300) {
                    // response from server is ok
                    options.success(xmlHttp.responseText);
                } else {
                    // anything else failed
                    options.error("Error calling service. Status code: " + xmlHttp.status);
                }
                break;
        }
    }
    
    if(!options.method){
        options.method = "GET";
    }

    // open the request
    xmlHttp.open(options.method, options.url, true);

    for(property in options.headers){
        xmlHttp.setRequestHeader(property, this.headers[property]);
    }

    // xmlHttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); 
    // finally send the request
    xmlHttp.send(options.body);
}

