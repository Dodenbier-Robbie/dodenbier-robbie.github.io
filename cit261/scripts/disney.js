function disneyJSON() {
 var xhr = new XMLHttpRequest();
    xhr.open("GET", "scripts/disney.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          var response = JSON.parse(xhr.responseText);
          
          var jsonString = JSON.stringify(response, null, 4);
          
          document.getElementById("jsonStringOutput").innerHTML = "<hr \><p><b>JSON converted to a string</b></p><pre>" + jsonString + "</pre>";
      }
    }
xhr.send();   
}