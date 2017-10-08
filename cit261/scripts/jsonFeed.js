function testJSON() {
 var xhr = new XMLHttpRequest();
    xhr.open("GET", "scripts/data.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          var response = JSON.parse(xhr.responseText);
          var jsonID = ""; 
          var jsonFirstName = "";
          var jsonLastName = "";
          var jsonEmail = "";
          var jsonGender = "";
          var jsonIPAddress = "";
          
          for(var i = 0; i < response.length; i++) {
              jsonID += response[i].id + "<br>";
              jsonFirstName += response[i].first_name + "<br>";
              jsonLastName += response[i].last_name + "<br>";
              jsonEmail += response[i].email + "<br>";
              jsonGender += response[i].gender + "<br>";
              jsonIPAddress += response[i].ip_address + "<br>";
            }
          document.getElementById("jsonOutput").innerHTML = jsonID;
      }
    }
xhr.send();   
}