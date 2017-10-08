function testJSON() {
 var xhr = new XMLHttpRequest();
    xhr.open("GET", "scripts/data.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          var response = JSON.parse(xhr.responseText);
          var jsonID = "";  
          for(var i = 0; i < response.length; i++) {
              jsonID += response[i].id + "<br>";   
            }
          document.getElementById("jsonOutput").innerHTML = jsonID;
      }
    }
xhr.send();   
}