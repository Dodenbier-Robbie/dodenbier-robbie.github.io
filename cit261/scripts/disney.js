function disneyJSON(value) {
 var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "scripts/disney.json", true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          
          var image = '<img src="' + response[value].picURL + '" />';
          
          var x = ""
          for(var i = 0; i < response[value].location.length; i++) {
              x += "<li>" + response[value].location[i] + "</li>";
          }
          
          document.getElementById("jsonHeader").innerHTML = (Number(value) + 1) + " - " + response[value].ride;
          document.getElementById("jsonPic").innerHTML = image;
          document.getElementById("jsonDetails").innerHTML = "<b>Locations: </b>" + "<ul>" + x + "</ul>" + "<b>Height Restriction: </b>" + response[value].heighRestriction + "<br><b>First Opened: </b>" + response[value].firstOpen
      }
    }
xhttp.send();   
}