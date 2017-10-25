function geoFindMe() {
    var output = document.getElementById("message");

    if (!navigator.geolocation){
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            output.innerHTML = "";
            weatherForecastJSON(latitude, longitude);
            weatherConditionsJSON(latitude, longitude);
        }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }
    
    var refreshIcon = '<i class="fa fa-spinner fa-spin"></i>';
    output.innerHTML = "<p>" + refreshIcon + " Locating…</p>";
    
    navigator.geolocation.getCurrentPosition(success, error);
    
    return;
}

function weatherGeoJSON() {
    var zipCode = document.getElementById("zipCode").value;
    var url = "https://api.wunderground.com/api/971a6113214d3607/geolookup/q/" + zipCode + ".json";
    var zip = document.getElementById("zipCode");
    zip.value = "";
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
          
          var currentIcon = response.forecast.txt_forecast.forecastday[0].icon;
          var currentHigh = response.forecast.simpleforecast.forecastday[0].high.fahrenheit;
          var currentLow = response.forecast.simpleforecast.forecastday[0].low.fahrenheit;
          
          if(currentIcon == "nt_clear") {
              var currentImage = '<img src="https://icons.wxug.com/i/c/v4/31.svg" />';
          }
          
          if(currentIcon == "clear") {
              var currentImage = '<img src="https://icons.wxug.com/i/c/v4/32.svg" />';
          }
          
          if(currentIcon == "partlycloudy") {
              var currentImage = '<img src="https://icons.wxug.com/i/c/v4/30.svg" />';
          }
          
          if(currentIcon == "nt_partlycloudy") {
              var currentImage = '<img src="https://icons.wxug.com/i/c/v4/30.svg" />';
          }
          
          document.getElementById("weatherImage").innerHTML = currentImage;
          document.getElementById("dailyHigh").innerHTML = currentHigh + "&deg; F | ";
          document.getElementById("dailyLow").innerHTML = currentLow + "&deg; F";
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
          
          document.getElementById("location").innerHTML = location;
          document.getElementById("conditions").innerHTML = conditions;
          document.getElementById("tempDegree").innerHTML = temp + "&deg; F";
      }
    }
xhttp.send();   
}