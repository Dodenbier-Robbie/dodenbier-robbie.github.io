var apiKey = '5a3006d99cf04027968174854192403';
var apiURL = 'https://api.apixu.com/v1/'

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
            currentWeatherJSON(latitude, longitude);
        }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }
    
    var refreshIcon = '<i class="fas fa-sync fa-spin"></i>';
    output.innerHTML = "<p>" + refreshIcon + "&nbsp;&nbsp;&nbsp;Locating…</p>";
    
    navigator.geolocation.getCurrentPosition(success, error);
    closePopUp();
    return;
}

function weatherGeoJSON() {
    var zipCode = document.getElementById("zipCode").value;
    var url = apiURL + "current.json?" + "key=" + apiKey + "&q=" + zipCode;
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
          currentWeatherJSON(lat, long);
      }
    }
xhttp.send();   
}

function currentWeatherJSON(lat, long) {
    
    if(localStorage.latitude && localStorage.longitude) {
        if(localStorage.getItem("latitude") != lat) {
            lat = localStorage.getItem("latitude");
        }
        if(localStorage.getItem("longitude") != long) {
            long = localStorage.getItem("longitude");
        }
        
        var url = apiURL + "current.json?key=" + apiKey + "&q=" + lat + "," + long;
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var response = JSON.parse(this.responseText);

              var location = response.location.name;
              var state = response.location.region;
              var country = response.location.country;
              var lastUpdated = response.current.last_updated;

              var conditions = response.current.condition.text;
              var currentWeatherImage = response.current.condition.icon;
              currentWeatherImage = currentWeatherImage.substr(2);
              var currentImage = '<img src="https://' + currentWeatherImage + '"/>';
              var temp = response.current.temp_f;
              temp = Math.round(temp);

              var windSpeed = response.current.wind_mph;
              var windDegree = response.current.wind_degree;
              var windDirection = response.current.wind_dir;
              var windGusts = response.current.gust_mph;

              if(country == 'United States of America') {
                document.getElementById("location").innerHTML = location + ", " + state;
              } else {
                document.getElementById("location").innerHTML = location + ", " + country;
              }
              
              document.getElementById("lastUpdateTime").innerHTML = "Last updated: " + lastUpdated;
              document.getElementById("conditions").innerHTML = conditions;
              document.getElementById("weatherImage").innerHTML =  currentImage;
              document.getElementById("tempDegree").innerHTML = temp + "&deg; F";

              document.getElementById("windSpeed").innerHTML = windSpeed;
              document.getElementById("windDir").innerHTML = "Wind <b>" + windDirection +"</b>";
              document.getElementById("windGusts").innerHTML = "Gusts: <b>" + windGusts + " mph</b>";
              document.getElementById("compass").style = "transform: rotate(" + windDegree + "deg); transition: 1s ease-in-out";

              var currentTempColor = document.getElementById("tempDegree")

              if(temp > 50) {
                currentTempColor.setAttribute("style", "color: #ff3300;");
              } else {
                currentTempColor.setAttribute("style", "color: #0000cc;");
              }
              forecastWeatherJSON(lat, long);
          }
        }
    } else {
            welcomePopUp()
    }
xhttp.send();   
}

function forecastWeatherJSON(lat, long) {
  if(localStorage.latitude && localStorage.longitude) {
    if(localStorage.getItem("latitude") != lat) {
        lat = localStorage.getItem("latitude");
    }
    if(localStorage.getItem("longitude") != long) {
        long = localStorage.getItem("longitude");
    }
  if(localStorage.getItem("forecastdays") != forecastDays) {
    forecastDays = localStorage.getItem("forecastdays");
  }
}
  var forecastDays = document.getElementById("forecastDays").value;
  localStorage.setItem("forecastdays", forecastDays);
  var url = apiURL + "forecast.json?key=" + apiKey + "&q=" + lat + "," + long + "&days=" + forecastDays;
  var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        var columnNode = document.getElementById("col-container");
        columnNode.textContent = "";

        for(var i = 0; i < forecastDays ; i++) {
          var dayWeatherImage = response.forecast.forecastday[i].day.condition.icon;
          var dayWeatherImage = response.forecast.forecastday[i].day.condition.icon;
          dayWeatherImage = dayWeatherImage.substr(2);
          var dayImage = '<img src="https://' + dayWeatherImage + '"/>';
          var dayDay = response.forecast.forecastday[i].date;
          var dayText = response.forecast.forecastday[i].day.condition.text;
          var dayHigh = response.forecast.forecastday[i].day.maxtemp_f;
          dayHigh = Math.round(dayHigh);
          var dayLow = response.forecast.forecastday[i].day.mintemp_f;
          dayLow = Math.round(dayLow);

          var divNode = document.createElement("DIV");
          divNode.classList.add("col");
          divNode.setAttribute("id", "col_"+i);
          var divImage = document.createElement("DIV");
          divImage.classList.add("dayImage");
          divImage.setAttribute("id", "dayImage_"+i);          
          var divDay = document.createElement("DIV");
          divDay.classList.add("dayDate");
          divDay.setAttribute("id", "dayDate_"+i);
          var divHigh = document.createElement("DIV");
          divHigh.classList.add("dayHigh");
          divHigh.setAttribute("id", "dayHigh_"+i);
          var divLow = document.createElement("DIV");
          divLow.classList.add("dayLow");
          divLow.setAttribute("id", "dayLow_"+i);
          var divText = document.createElement("DIV");
          divText.classList.add("dayText");
          divText.setAttribute("id", "dayText_"+i);

          columnNode.appendChild(divNode);
          divNode.appendChild(divImage);
          divNode.appendChild(divDay);
          divNode.appendChild(divHigh);
          divNode.appendChild(divLow);
          divNode.appendChild(divText);

          var x = i % 2;

          if (x > 0) {
            divNode.setAttribute("style", "background-color: #e4e3e4;");
          }

          document.getElementById("dayImage_"+i).innerHTML = dayImage;
          document.getElementById("dayDate_"+i).innerHTML = dayDay;
          document.getElementById("dayHigh_"+i).innerHTML = "HIGH<b> " + dayHigh + "</b>&deg; F";
          document.getElementById("dayLow_"+i).innerHTML = "LOW<b> " + dayLow + "</b>&deg; F";
          document.getElementById("dayText_"+i).innerHTML = dayText;
        }
      }
    }
xhttp.send();   
}

function welcomePopUp() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    
    overlay.className = "show";
    popup.className = "show";
}

function closePopUp() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    
    overlay.className = "";
    popup.className = "";    
}
