function testJSON() {
 var xhr = new XMLHttpRequest();
    xhr.open("GET", "scripts/data.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          var response = JSON.parse(xhr.responseText);
            for(var i = 0; i < response.length; i++) {
              var jsonID =+ response[i].id;   
            }
      }
    }
xhr.send();   
}