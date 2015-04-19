var theUrl = "http://loanr.thenoobprogrammer.com/currentUser";

var getUser = function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, true );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var res = getUser(theUrl);

