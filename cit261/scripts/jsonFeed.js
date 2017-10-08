function testJSON() {
 var xhr = new XMLHttpRequest();
    xhr.open("GET", "scripts/data.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          var response = JSON.parse(xhr.responseText);
          var jsonDisplay = "";
          
          for(var i = 0; i < response.length; i++) {
              jsonDisplay += "<p>" + response[i].id + "<br>" + response[i].first_name + "<br>" + response[i].last_name + "<br>" + response[i].email + "<br>" + response[i].gender + "<br>" + response[i].ip_address + "</p>";
            }
          document.getElementById("jsonOutput").innerHTML = jsonDisplay;
      }
    }
xhr.send();   
}