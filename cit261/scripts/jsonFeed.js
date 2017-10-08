function testJSON() {
 var xhr = new XMLHttpRequest();
    xhr.open("GET", "scripts/data.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          var response = JSON.parse(xhr.responseText);
          var jsonDisplay = "";
          
          for(var i = 0; i < response.length; i++) {
              jsonDisplay += "<p>ID: " + response[i].id + "<br>First Name: " + response[i].first_name + "<br>Last Name: " + response[i].last_name + "<br>Email: " + response[i].email + "<br>Gender: " + response[i].gender + "<br>IP Address: " + response[i].ip_address + "</p>";
            }
          document.getElementById("jsonOutput").innerHTML = jsonDisplay;
          
          var jsonString = JSON.stringify(xhr.responseText,null,4);
          
          document.getElementById("jsonStringOutput").innerHTML = "<p><b>JSON converted to a string</b></p>" + jsonString;
      }
    }
xhr.send();   
}