function geoFindMe() {
    var output = document.getElementById("out");

    if (!navigator.geolocation){
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            out.innerHTML = "";
            weatherForecastJSON(latitude, longitude);
            weatherConditionsJSON(latitude, longitude);
        }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }
    
    output.innerHTML = "<p>Locating…</p>";
    
    navigator.geolocation.getCurrentPosition(success, error);
    
    return;
}

function weatherGeoJSON() {
    var zipCode = document.getElementById("zipCode").value;
    var url = "https://api.wunderground.com/api/971a6113214d3607/geolookup/q/" + zipCode + ".json";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          var lat = response.location.lat;
          var long = response.location.lon;
          weatherForecastJSON(lat, long);
          weatherConditionsJSON(lat, long);
      }
    }
xhttp.send();   
}

function weatherForecastJSON(lat, long) {
    var url = "https://api.wunderground.com/api/971a6113214d3607/forecast/q/" + lat + "," + long + ".json";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          
          var day = [];
          var text = [];
          for(var i = 0; i < response.forecast.txt_forecast.forecastday.length; i++) {
              day.push(response.forecast.txt_forecast.forecastday[i].title);
              text.push(response.forecast.txt_forecast.forecastday[i].fcttext);
          }
          
          var forecastOutput = "";
          
          for(var i = 0; i < day.length; i++) {
              forecastOutput += day[i] + " - " + text[i] + "<br>";
          }
          
          document.getElementById("day").innerHTML = forecastOutput;
      }
    }
xhttp.send();   
}

function weatherConditionsJSON(lat, long) {
    var url = "https://api.wunderground.com/api/971a6113214d3607/conditions/q/" + lat + "," + long + ".json";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          
          //var image = '<img src="' + response.current_observation.icon_url + '" />';
          
          var location = response.current_observation.display_location.full;
          var conditions = response.current_observation.weather;
          var temp = response.current_observation.temp_f;
          var icon = response.current_observation.icon;
          
          if(icon == "clear") {
              var image = '<img src="https://icons.wxug.com/i/c/v4/31.svg" />';
          }
          
          document.getElementById("weatherImage").innerHTML = image;
          document.getElementById("location").innerHTML = location;
          document.getElementById("conditions").innerHTML = conditions;
          document.getElementById("tempDegree").innerHTML = temp + "&deg; F";
      }
    }
xhttp.send();   
}