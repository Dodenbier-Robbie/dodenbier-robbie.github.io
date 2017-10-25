function geoFindMe() {
    var output = document.getElementById("message");

    if (!navigator.geolocation){
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            localStorage.setItem("latitude", latitude);
            localStorage.setItem("longitude", longitude);
            output.innerHTML = "";
            weatherForecastJSON(latitude, longitude);
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
          localStorage.setItem("latitude", lat);
          localStorage.setItem("longitude", long);
          weatherForecastJSON(lat, long);
      }
    }
xhttp.send();   
}

function weatherForecastJSON(lat, long) {
    
    if(localStorage.latitude && localStorage.longitude) {
        if(localStorage.getItem("latitude") != lat) {
            lat = localStorage.getItem("latitude");
        }
        if(localStorage.getItem("longitude") != long) {
            long = localStorage.getItem("longitude");
        }
        var url = "https://api.wunderground.com/api/971a6113214d3607/forecast/q/" + lat + "," + long + ".json";
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var response = JSON.parse(this.responseText);

              var currentIcon = response.forecast.txt_forecast.forecastday[0].icon;
              var currentHigh = response.forecast.simpleforecast.forecastday[0].high.fahrenheit;
              var currentLow = response.forecast.simpleforecast.forecastday[0].low.fahrenheit;
              
              var dayImage = response.forecast.txt_forecast.forecastday[0].icon_url;
              dayImage = '<img src="' + dayImage + '" />';
              var dayDayName = response.forecast.txt_forecast.forecastday[0].title;
              var dayText = response.forecast.txt_forecast.forecastday[0].fcttext;
              var dayCondition = response.forecast.simpleforecast.forecastday[0].conditions;
              var dayMonth = response.forecast.simpleforecast.forecastday[0].date.month;
              var dayDay = response.forecast.simpleforecast.forecastday[0].date.day;
              
              var nightImage = response.forecast.txt_forecast.forecastday[1].icon_url;
              nightImage = '<img src="' + nightImage + '" />';
              var nightDayName = response.forecast.txt_forecast.forecastday[1].title;
              var nightText = response.forecast.txt_forecast.forecastday[1].fcttext;
              var nightConditions = response.forecast.simpleforecast.forecastday[1].conditions;
              var nightMonth = response.forecast.simpleforecast.forecastday[1].date.month;
              var nightDay = response.forecast.simpleforecast.forecastday[1].date.day;
              
              var tomorrowImage = response.forecast.txt_forecast.forecastday[2].icon_url;
              tomorrowImage = '<img src="' + tomorrowImage + '" />';
              var tomorrowDayName = response.forecast.txt_forecast.forecastday[2].title;
              var tomorrowText = response.forecast.txt_forecast.forecastday[2].fcttext;
              var tomorrowConditions = response.forecast.simpleforecast.forecastday[2].conditions;
              var tomorrowMonth = response.forecast.simpleforecast.forecastday[2].date.month;
              var tomorrowDay = response.forecast.simpleforecast.forecastday[2].date.day;

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
              document.getElementById("dayImage").innerHTML = dayImage;
              document.getElementById("dayDay").innerHTML = dayDayName;
              document.getElementById("dayText").innerHTML = dayText;
              document.getElementById("dayCondition").innerHTML = dayCondition;
              document.getElementById("dayDate").innerHTML = dayMonth + " / " + dayDay;
              document.getElementById("dayHigh").innerHTML = "HIGH " + currentHigh + "&deg; F";
              
              weatherConditionsJSON(lat, long);
          }
        }
    } else {
        localStorage.setItem("latitude", 40.351456);
        localStorage.setItem("longitude", -111.724213);
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