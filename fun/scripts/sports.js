var apiURL = "https://api-basketball.p.rapidapi.com";
var apiKey = "a13e46a545mshf3f69d2ddffc148p171dbajsn99947fd9e8b0"

function getGames(season,teamId) {
	var url = "";
	var pageTitle = document.getElementById("pageTitle");
	pageTitle.innerHTML = "NBA " + season + " Games";

	if (teamId > 0 && season != 0) {
		url = apiURL + "/games?league=12&season=" + season + "&team=" + teamId;
		var logo = "images/nba/" + teamId +".png";
		var teamLogoUrl = document.createElement("IMG");
		teamLogoUrl.setAttribute("src", logo);
		teamLogoUrl.setAttribute("width", "100px");
		teamLogoUrl.setAttribute("height", "100px");
		document.getElementById("teamLogo").appendChild(teamLogoUrl);
	}
	if (teamId > 0 && season == 0) {
		var output = document.getElementById("errorMessage");
		output.innerHTML = "The Season field is required.";
		return;
	}
	if (teamId == 0 && season != 0) {
		url = apiURL + "/games?league=12&season=" + season;
	}
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.setRequestHeader("x-rapidapi-key", apiKey);
	xhr.setRequestHeader("Access-Control-Allow-Origin", apiURL);
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === this.DONE) {
			var apiResponse = JSON.parse(this.responseText);
			var teamLogo = "";
			createTable();
			var j = apiResponse.response.length;
			for (var i = 0; i<j; i++) {
				var gameStatus = apiResponse.response[i].status.long;
				var date = apiResponse.response[i].date;
				var utcDate = new Date(date);
				var month = utcDate.getMonth()+1;
				var day = utcDate.getDate();
				var year = utcDate.getFullYear();
				var gameDate = month+"/"+day+"/"+year;
				var homeTeam = apiResponse.response[i].teams.home.name;
				var awayTeam = apiResponse.response[i].teams.away.name;
				var homeScore = apiResponse.response[i].scores.home.total;
				var awayScore = apiResponse.response[i].scores.away.total;

				if(gameStatus === "Game Finished") {
					gameStatus = "Final";
				}

				if (gameStatus === "After Over Time") {
					gameStatus = "Final/OT"
				}

				var row = document.createElement("TR");
				row.setAttribute("id", "row_"+i);
				document.getElementById("scheduleTable").appendChild(row);

				var createCell1 = document.createElement("TD");
				var cellText1 = document.createTextNode(gameDate);
				var createCell2 = document.createElement("TD");
				var cellText2 = document.createTextNode(homeTeam);
				var createCell3 = document.createElement("TD");
				var cellText3 = document.createTextNode(homeScore);
				var createCell4 = document.createElement("TD");
				var cellText4 = document.createTextNode(awayTeam);
				var createCell5 = document.createElement("TD");
				var cellText5 = document.createTextNode(awayScore);
				var createCell6 = document.createElement("TD");
				var cellText6 = document.createTextNode(gameStatus);

				createCell1.appendChild(cellText1);
				createCell2.appendChild(cellText2);
				createCell3.appendChild(cellText3);
				createCell4.appendChild(cellText4);
				createCell5.appendChild(cellText5);
				createCell6.appendChild(cellText6);
				document.getElementById("row_"+i).appendChild(createCell1);
				document.getElementById("row_"+i).appendChild(createCell2);
				document.getElementById("row_"+i).appendChild(createCell3);
				document.getElementById("row_"+i).appendChild(createCell4);
				document.getElementById("row_"+i).appendChild(createCell5);
				document.getElementById("row_"+i).appendChild(createCell6);
			}
		}
	});
xhr.send();
}

function createTable() {
	var createTable = document.createElement("TABLE");
	createTable.setAttribute("id", "scheduleTable");
	document.getElementById("table-container").appendChild(createTable);

	var headerRow = document.createElement("TR");
	headerRow.setAttribute("id", "headerRow");
	document.getElementById("scheduleTable").appendChild(headerRow);
	var createHeadCell1 = document.createElement("TD");
	var headerText1 = document.createTextNode("DATE");
	var createHeadCell2 = document.createElement("TD");
	var headerText2 = document.createTextNode("HOME TEAM");
	var createHeadCell3 = document.createElement("TD");
	var headerText3 = document.createTextNode("HOME TEAM SCORE");
	var createHeadCell4 = document.createElement("TD");
	var headerText4 = document.createTextNode("AWAY TEAM");
	var createHeadCell5 = document.createElement("TD"); 
	var headerText5 = document.createTextNode("AWAY TEAM SCORE");
	var createHeadCell6 = document.createElement("TD"); 
	var headerText6 = document.createTextNode("STATUS");
	createHeadCell1.appendChild(headerText1);
	createHeadCell2.appendChild(headerText2);
	createHeadCell3.appendChild(headerText3);
	createHeadCell4.appendChild(headerText4);
	createHeadCell5.appendChild(headerText5);
	createHeadCell6.appendChild(headerText6);
	document.getElementById("headerRow").appendChild(createHeadCell1);
	document.getElementById("headerRow").appendChild(createHeadCell2);
	document.getElementById("headerRow").appendChild(createHeadCell3);
	document.getElementById("headerRow").appendChild(createHeadCell4);
	document.getElementById("headerRow").appendChild(createHeadCell5);
	document.getElementById("headerRow").appendChild(createHeadCell6);
}

function loadPage(){
	var tableCheck = document.getElementById("scheduleTable");
	var logoCheck = document.getElementById("teamLogo");
	if (tableCheck) {
		var x = tableCheck.parentElement;
		x.removeChild(tableCheck);
	}
	if (logoCheck) {
		$( 'IMG' ).remove();
	}
	var season = document.getElementById("seasonSelect").value;
	var teamId = document.getElementById("teamName").value;
	getGames(season,teamId);
}

