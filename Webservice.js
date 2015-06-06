// ==========================================================================
// Author: Francois Laubscher
// Date: 2014-07-02
// Description: Webservice wrapper library
// Update: 2015-06-06, Francois Laubscher - fixed XDomainRequest for IE8
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
    
    // IE 8 fix
    if(typeof XDomainRequest != "undefined"){
        xmlHttp = new XDomainRequest();
    } else {
        xmlHttp.withCredentials = true;
    }

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
        xmlHttp.setRequestHeader(property, options.headers[property]);
    }

    // finally send the request
    xmlHttp.send(options.body);
}