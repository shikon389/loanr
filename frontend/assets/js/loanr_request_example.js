var request = new XMLHttpRequest(); 

request.open("GET", "http://loanr.thenoobprogrammer.com/api/users/currentUser", true);

request.onreadystatechange = function(){
    response = JSON.parse(request.responseText);

    var req2Url = "http://loanr.thenoobprogrammer.com/api/users/" + response.user.username; 

    var req2 = new XMLHttpRequest(); 
    req2.open("GET", req2Url, true); 

    req2.onreadystatechange = function(){
        //update DOM
    };

    req2.send();

};  

request.send();