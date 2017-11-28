function geoFindMe() {
    var output = document.getElementById("message");
    var closePopup = document.getElementById("popupclose");
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    
    overlay.className = "";
    popup.className = "";

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
              
              var dayImage = response.forecast.txt_forecast.forecastday[0].icon_url;
              dayImage = '<img src="' + dayImage + '" />';
              var secureDayImage = dayImage.replace("http", "https");
              var dayDayName = response.forecast.txt_forecast.forecastday[0].title;
              var dayText = response.forecast.txt_forecast.forecastday[0].fcttext;
              var dayCondition = response.forecast.simpleforecast.forecastday[0].conditions;
              var dayMonth = response.forecast.simpleforecast.forecastday[0].date.month;
              var dayDay = response.forecast.simpleforecast.forecastday[0].date.day;
              var dayHigh = response.forecast.simpleforecast.forecastday[0].high.fahrenheit;
              
              var nightImage = response.forecast.txt_forecast.forecastday[1].icon_url;
              nightImage = '<img src="' + nightImage + '" />';
              var secureNightImage = nightImage.replace("http", "https");
              var nightDayName = response.forecast.txt_forecast.forecastday[1].title;
              var nightText = response.forecast.txt_forecast.forecastday[1].fcttext;
              var nightConditions = response.forecast.simpleforecast.forecastday[0].conditions;
              var nightMonth = response.forecast.simpleforecast.forecastday[0].date.month;
              var nightDay = response.forecast.simpleforecast.forecastday[0].date.day;
              var nightLow = response.forecast.simpleforecast.forecastday[0].low.fahrenheit;
              
              var tomorrowImage = response.forecast.txt_forecast.forecastday[2].icon_url;
              tomorrowImage = '<img src="' + tomorrowImage + '" />';
              var secureTomorrowImage = tomorrowImage.replace("http", "https");
              var tomorrowDayName = response.forecast.txt_forecast.forecastday[2].title;
              var tomorrowText = response.forecast.txt_forecast.forecastday[2].fcttext;
              var tomorrowConditions = response.forecast.simpleforecast.forecastday[1].conditions;
              var tomorrowMonth = response.forecast.simpleforecast.forecastday[1].date.month;
              var tomorrowDay = response.forecast.simpleforecast.forecastday[1].date.day;
              var tomorrowHigh = response.forecast.simpleforecast.forecastday[1].high.fahrenheit;
              var tomorrowLow = response.forecast.simpleforecast.forecastday[1].low.fahrenheit;
              
              document.getElementById("dayImage").innerHTML = secureDayImage;
              document.getElementById("dayDay").innerHTML = dayDayName;
              document.getElementById("dayText").innerHTML = dayText;
              document.getElementById("dayDate").innerHTML = dayMonth + "/" + dayDay;
              document.getElementById("dailyLow").innerHTML = nightLow + "&deg; F";
              document.getElementById("dayHigh").innerHTML = "HIGH<b> " + dayHigh + "</b>&deg; F";
              document.getElementById("dailyHigh").innerHTML = dayHigh + "&deg; F | ";
              
              document.getElementById("nightImage").innerHTML = secureNightImage;
              document.getElementById("nightDay").innerHTML = nightDayName;
              document.getElementById("nightText").innerHTML = nightText;
              document.getElementById("nightDate").innerHTML = nightMonth + "/" + nightDay;
              document.getElementById("nightLow").innerHTML = "LOW<b> " + nightLow + "</b>&deg; F";
              
              document.getElementById("tomorrowImage").innerHTML = secureTomorrowImage;
              document.getElementById("tomorrowDay").innerHTML = tomorrowDayName;
              document.getElementById("tomorrowText").innerHTML = tomorrowText;
              document.getElementById("tomorrowDate").innerHTML = tomorrowMonth + "/" + tomorrowDay;
              document.getElementById("tomorrowHigh").innerHTML = "HIGH<b>  " + tomorrowHigh + "</b> | " + tomorrowLow + "&deg; F";
              
              weatherConditionsJSON(lat, long);
          }
        }
    } else {
            welcomePopUp()
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

          var currentIcon = response.current_observation.icon;
          var currentHigh = response.current_observation.temp_f;
          
          var location = response.current_observation.display_location.full;
          var conditions = response.current_observation.weather;
          var temp = response.current_observation.temp_f;
          var icon = response.current_observation.icon;
          
          var lastUpdated = response.current_observation.observation_time;
          var windSpeed = response.current_observation.wind_mph;
          var windDegree = response.current_observation.wind_degrees;
          var windDirection = response.current_observation.wind_dir;
          var windGusts = response.current_observation.wind_gust_mph;
          
          document.getElementById("location").innerHTML = location;
          document.getElementById("conditions").innerHTML = conditions;
          document.getElementById("tempDegree").innerHTML = temp + "&deg; F";
          document.getElementById("lastUpdateTime").innerHTML = lastUpdated;
          document.getElementById("windSpeed").innerHTML = windSpeed;
          document.getElementById("windDir").innerHTML = "Wind <b>" + windDirection +"</b>";
          document.getElementById("windGusts").innerHTML = "Gusts: <b>" + windGusts + " mph</b>";
          document.getElementById("compass").style = "transform: rotate(" + windDegree + "deg); transition: 1s ease-in-out";
          
          setCurrentImage(currentIcon, lat, long);
      }
    }
xhttp.send();   
}

function setCurrentImage(currentIcon, lat, long) {
    var url = "https://api.wunderground.com/api/971a6113214d3607/astronomy/q/" + lat + "," + long + ".json";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() { 
      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          
          var sunSetHour = response.sun_phase.sunset.hour; 
          var sunSetMinute = response.sun_phase.sunset.minute;
          var sunSetTime = new Date().setHours(sunSetHour,sunSetMinute);
          
          var sunRiseHour = response.sun_phase.sunrise.hour; 
          var sunRiseMinute = response.sun_phase.sunrise.minute;
          var sunRiseTime = new Date().setHours(sunRiseHour, sunRiseMinute); 
          
          var currentHour = response.moon_phase.current_time.hour;
          var currentMinute = response.moon_phase.current_time.minute;
          var currentTime = new Date().setHours(currentHour, currentMinute);

        if(currentIcon == "clear") {
              if(currentTime > sunRiseTime && currentTime < sunSetTime) {
                 var currentImage = '<img src="https://icons.wxug.com/i/c/v4/32.svg" />'; 
              } else {
                  var currentImage = '<img src="https://icons.wxug.com/i/c/v4/31.svg" />';
              }
          } else if(currentIcon == "partlycloudy") {
              if(currentTime > sunRiseTime && currentTime < sunSetTime) {
                 var currentImage = '<img src="https://icons.wxug.com/i/c/v4/30.svg" />'; 
              } else {
                  var currentImage = '<img src="https://icons.wxug.com/i/c/v4/29.svg" />';
              }
          }else if(currentIcon == "cloudy") {
                  var currentImage = '<img src="https://icons.wxug.com/i/c/v4/26.svg" />';
          }else if(currentIcon == "rain") {
              if(currentTime > sunRiseTime && currentTime < sunSetTime) {
                  var currentImage = '<img src="https://icons.wxug.com/i/c/v4/40.svg" />';
              }else {
                  var currentImage = '<img src="https://icons.wxug.com/i/c/v4/45.svg" />';
              }
          }else if(currentIcon == "mostlycloudy") {
              if(currentTime > sunRiseTime && currentTime < sunSetTime) {
                  var currentImage = '<img src="https://icons.wxug.com/i/c/v4/28.svg" />'; 
              }else {
                  var currentImage = '<img src="https://icons.wxug.com/i/c/v4/27.svg" />'; 
              }
          }else if(currentIcon == "sleet" || currentIcon == "snow") {
                  var currentImage = '<img src="https://icons.wxug.com/i/c/v4/14.svg" />';           
          }else {
              var currentImage = '<img src="https://icons.wxug.com/i/c/v4/32.svg" />';
          }

        document.getElementById("weatherImage").innerHTML = currentImage;
      }
    }
xhttp.send();   
}

function welcomePopUp() {
    var closePopup = document.getElementById("popupclose");
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    
    overlay.className = "show";
    popup.className = "show";
}