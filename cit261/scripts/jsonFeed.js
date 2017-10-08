function testJSON() {
 var xhr = new XMLHttpRequest();
    xhr.open("GET", "scripts/data.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          var response = JSON.parse(xhr.responseText);
        document.getElementById("jsonOutput").innerText = response[0].id;
      }
    }
xhr.send();   
}