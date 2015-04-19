var request = new XMLHttpRequest(); 

request.open("GET", "http://loanr.thenoobprogrammer.com/api/users/currentUser", true);

request.onreadystatechange = acquireUser;

function acquireUser(){
	 if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
		    response = JSON.parse(request.responseText);

		    var req2Url = "http://loanr.thenoobprogrammer.com/api/users/" + response.user.username; 

		    var req2 = new XMLHttpRequest(); 
		    req2.open("GET", req2Url, true); 

		    req2.onreadystatechange = function(){
		    	if (xmlHttp.readyState == 4) {
        			if (xmlHttp.status == 200) {
		        		$('#name').innerHTML = xmlHttp.responseText;
		        	}
		        }
		    };

		    req2.send();
		}
	}
}; 

request.send();