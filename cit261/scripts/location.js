function geoFindMe() {
    var output = document.getElementById("out");
    
    navigator.geolocation.getCurrentPosition(success, error);

    if (!navigator.geolocation){
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            weatherGeoJSON(latitude, longitude);
        }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }
    
    return;
}

function weatherGeoJSON(lat, long) {
    var url = "http://api.wunderground.com/api/971a6113214d3607/geolookup/q/" + lat + "," + long + ".json"
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          var city = response.location.city;
          var country = response.location.country;
          var state = response.location.state;
          weatherJSON(city, state, country);
      }
    }
xhttp.send();   
}

function weatherJSON(city, state, country) {
    var url = "http://api.wunderground.com/api/971a6113214d3607/forecast/q/" + country + "/" + state + "/" + city + ".json"
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          
          console.log(response.forecast.txt_forecast.forecastday.length);
          
          var day = [];
          var text = [];
          for(var i = 0; i < response.forecast.txt_forecast.forecastday.length; i++) {
              day.push(response.forecast.txt_forecast.forecastday[i].title);
              text.push(response.forecast.txt_forecast.forecastday[i].fcttext);
          }
          
          for (var i = 0; i < day.length; i++) {
              document.getElementById("day").innerHTML = day[i];
          }
      }
    }
xhttp.send();   
}