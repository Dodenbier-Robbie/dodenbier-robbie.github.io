var apiURL = "https://api-basketball.p.rapidapi.com";
var apiKey = "a13e46a545mshf3f69d2ddffc148p171dbajsn99947fd9e8b0"

function getStats(season,teamId) {
	var url = "";
	if (teamId > 0 && season != 0) {
		url = apiURL + "/statistics?league=12&season=" + season + "&team=" + teamId;
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
			createHeaderRows();
			var teamFullName = apiResponse.response.team.name;
			var pageTitle = document.getElementById("pageTitle");
			pageTitle.innerHTML = teamFullName + " Stats";

			var gamesPlayedHome = apiResponse.response.games.played.home;
			var gamesPlayedAway = apiResponse.response.games.played.away;
			var gamesPlayedAll = apiResponse.response.games.played.all;

			var gamesWinsHomeTotal = apiResponse.response.games.wins.home.total;
			var gamesWinsHomePercentage = apiResponse.response.games.wins.home.percentage;
			var gamesWinsAwayTotal = apiResponse.response.games.wins.away.total;
			var gamesWinsAwayPercentage = apiResponse.response.games.wins.away.percentage;
			var gamesWinsAllTotal = apiResponse.response.games.wins.all.total;
			var gamesWinsAllPercentage = apiResponse.response.games.wins.all.percentage;

			var gamesLosesHomeTotal = apiResponse.response.games.loses.home.total;
			var gamesLosesAwayTotal = apiResponse.response.games.loses.away.total;
			var gamesLosesAllTotal = apiResponse.response.games.loses.all.total;

			var pointsForTotalHome = apiResponse.response.points.for.total.home;
			var pointsForTotalAway = apiResponse.response.points.for.total.away;
			var pointsForTotalAll = apiResponse.response.points.for.total.all;

			var pointsForAverageHome = apiResponse.response.points.for.average.home;
			var pointsForAverageAway = apiResponse.response.points.for.average.away;
			var pointsForAverageAll = apiResponse.response.points.for.average.all;

			var pointsAgainstTotalHome = apiResponse.response.points.against.total.home;
			var pointsAgainstTotalAway = apiResponse.response.points.against.total.away;
			var pointsAgainstTotalAll = apiResponse.response.points.against.total.all;

			var pointsAgainstAverageHome = apiResponse.response.points.against.average.home;
			var pointsAgainstAverageAway = apiResponse.response.points.against.average.away;
			var pointsAgainstAverageAll = apiResponse.response.points.against.average.all;

			var row5 = document.createElement("TR");
			row5.setAttribute("id", "row5");
			var row6 = document.createElement("TR");
			row6.setAttribute("id", "row6");
			var row7 = document.createElement("TR");
			row7.setAttribute("id", "row7");
			var row8 = document.createElement("TR");
			row8.setAttribute("id", "row8");
			var row9 = document.createElement("TR");
			row9.setAttribute("id", "row9");
			var row10 = document.createElement("TR");
			row10.setAttribute("id", "row10");

			document.getElementById("statsTable1").appendChild(row5);
			document.getElementById("statsTable1").appendChild(row6);
			document.getElementById("statsTable1").appendChild(row7);
			
			document.getElementById("statsTable2").appendChild(row8);
			document.getElementById("statsTable2").appendChild(row9);
			document.getElementById("statsTable2").appendChild(row10);

			var createCell1 = document.createElement("TD");
			var cellText1 = document.createTextNode("Home");
			var createCell2 = document.createElement("TD");
			var cellText2 = document.createTextNode(gamesPlayedHome);
			var createCell3 = document.createElement("TD");
			var cellText3 = document.createTextNode(gamesWinsHomeTotal);
			var createCell4 = document.createElement("TD");
			var cellText4 = document.createTextNode(gamesLosesHomeTotal);
			var createCell5 = document.createElement("TD");
			var cellText5 = document.createTextNode(gamesWinsHomePercentage);

			createCell1.appendChild(cellText1);
			createCell2.appendChild(cellText2);
			createCell3.appendChild(cellText3);
			createCell4.appendChild(cellText4);
			createCell5.appendChild(cellText5);
			document.getElementById("row5").appendChild(createCell1);
			document.getElementById("row5").appendChild(createCell2);
			document.getElementById("row5").appendChild(createCell3);
			document.getElementById("row5").appendChild(createCell4);
			document.getElementById("row5").appendChild(createCell5);

			var createCell1 = document.createElement("TD");
			var cellText1 = document.createTextNode("Away");
			var createCell2 = document.createElement("TD");
			var cellText2 = document.createTextNode(gamesPlayedAway);
			var createCell3 = document.createElement("TD");
			var cellText3 = document.createTextNode(gamesWinsAwayTotal);
			var createCell4 = document.createElement("TD");
			var cellText4 = document.createTextNode(gamesLosesAwayTotal);
			var createCell5 = document.createElement("TD");
			var cellText5 = document.createTextNode(gamesWinsAwayPercentage);

			createCell1.appendChild(cellText1);
			createCell2.appendChild(cellText2);
			createCell3.appendChild(cellText3);
			createCell4.appendChild(cellText4);
			createCell5.appendChild(cellText5);
			document.getElementById("row6").appendChild(createCell1);
			document.getElementById("row6").appendChild(createCell2);
			document.getElementById("row6").appendChild(createCell3);
			document.getElementById("row6").appendChild(createCell4);
			document.getElementById("row6").appendChild(createCell5);

			var createCell1 = document.createElement("TD");
			var cellText1 = document.createTextNode("All");
			var createCell2 = document.createElement("TD");
			var cellText2 = document.createTextNode(gamesPlayedAll);
			var createCell3 = document.createElement("TD");
			var cellText3 = document.createTextNode(gamesWinsAllTotal);
			var createCell4 = document.createElement("TD");
			var cellText4 = document.createTextNode(gamesLosesAllTotal);
			var createCell5 = document.createElement("TD");
			var cellText5 = document.createTextNode(gamesWinsAllPercentage);

			createCell1.appendChild(cellText1);
			createCell2.appendChild(cellText2);
			createCell3.appendChild(cellText3);
			createCell4.appendChild(cellText4);
			createCell5.appendChild(cellText5);
			document.getElementById("row7").appendChild(createCell1);
			document.getElementById("row7").appendChild(createCell2);
			document.getElementById("row7").appendChild(createCell3);
			document.getElementById("row7").appendChild(createCell4);
			document.getElementById("row7").appendChild(createCell5);

			var createCell1 = document.createElement("TD");
			var cellText1 = document.createTextNode("Home");
			var createCell2 = document.createElement("TD");
			var cellText2 = document.createTextNode(pointsForTotalHome);
			var createCell3 = document.createElement("TD");
			var cellText3 = document.createTextNode(pointsForAverageHome);
			var createCell4 = document.createElement("TD");
			var cellText4 = document.createTextNode(pointsAgainstTotalHome);
			var createCell5 = document.createElement("TD");
			var cellText5 = document.createTextNode(pointsAgainstAverageHome);

			createCell1.appendChild(cellText1);
			createCell2.appendChild(cellText2);
			createCell3.appendChild(cellText3);
			createCell4.appendChild(cellText4);
			createCell5.appendChild(cellText5);
			document.getElementById("row8").appendChild(createCell1);
			document.getElementById("row8").appendChild(createCell2);
			document.getElementById("row8").appendChild(createCell3);
			document.getElementById("row8").appendChild(createCell4);
			document.getElementById("row8").appendChild(createCell5);

			var createCell1 = document.createElement("TD");
			var cellText1 = document.createTextNode("Away");
			var createCell2 = document.createElement("TD");
			var cellText2 = document.createTextNode(pointsForTotalAway);
			var createCell3 = document.createElement("TD");
			var cellText3 = document.createTextNode(pointsForAverageAway);
			var createCell4 = document.createElement("TD");
			var cellText4 = document.createTextNode(pointsAgainstTotalAway);
			var createCell5 = document.createElement("TD");
			var cellText5 = document.createTextNode(pointsAgainstAverageAway);

			createCell1.appendChild(cellText1);
			createCell2.appendChild(cellText2);
			createCell3.appendChild(cellText3);
			createCell4.appendChild(cellText4);
			createCell5.appendChild(cellText5);
			document.getElementById("row9").appendChild(createCell1);
			document.getElementById("row9").appendChild(createCell2);
			document.getElementById("row9").appendChild(createCell3);
			document.getElementById("row9").appendChild(createCell4);
			document.getElementById("row9").appendChild(createCell5);

			var createCell1 = document.createElement("TD");
			var cellText1 = document.createTextNode("All");
			var createCell2 = document.createElement("TD");
			var cellText2 = document.createTextNode(pointsForTotalAll);
			var createCell3 = document.createElement("TD");
			var cellText3 = document.createTextNode(pointsForAverageAll);
			var createCell4 = document.createElement("TD");
			var cellText4 = document.createTextNode(pointsAgainstTotalAll);
			var createCell5 = document.createElement("TD");
			var cellText5 = document.createTextNode(pointsAgainstAverageAll);

			createCell1.appendChild(cellText1);
			createCell2.appendChild(cellText2);
			createCell3.appendChild(cellText3);
			createCell4.appendChild(cellText4);
			createCell5.appendChild(cellText5);
			document.getElementById("row10").appendChild(createCell1);
			document.getElementById("row10").appendChild(createCell2);
			document.getElementById("row10").appendChild(createCell3);
			document.getElementById("row10").appendChild(createCell4);
			document.getElementById("row10").appendChild(createCell5);
		}
	});
xhr.send();
}

function createHeaderRows() {
	var divNode1 = document.createElement("DIV");
	divNode1.setAttribute("id", "table1");
	var divNode2 = document.createElement("DIV");
	divNode2.setAttribute("id", "table2");
	var createTable1 = document.createElement("TABLE");
	createTable1.setAttribute("id", "statsTable1");
	var createTable2 = document.createElement("TABLE");
	createTable2.setAttribute("id", "statsTable2");

	document.getElementById("table-container").appendChild(divNode1);
	document.getElementById("table-container").appendChild(divNode2);
	document.getElementById("table1").appendChild(createTable1);
	document.getElementById("table2").appendChild(createTable2);

	var headerRow = document.createElement("TR");
	headerRow.setAttribute("id", "headerRow");
	var row2 = document.createElement("TR");
	row2.setAttribute("id", "row2");

	var headerRow2 = document.createElement("TR");
	headerRow2.setAttribute("id", "headerRow2");
	var row4 = document.createElement("TR");
	row4.setAttribute("id", "row4");

	document.getElementById("statsTable1").appendChild(headerRow);
	document.getElementById("statsTable2").appendChild(headerRow2);
	document.getElementById("statsTable1").appendChild(row2);
	document.getElementById("statsTable2").appendChild(row4);

	var createHeaderCell1 = document.createElement("TH");
	createHeaderCell1.setAttribute("colspan", "5");
	var headText1 = document.createTextNode("GAMES");
	createHeaderCell1.appendChild(headText1);
	document.getElementById("headerRow").appendChild(createHeaderCell1);

	var createHeaderCell2 = document.createElement("TH");
	createHeaderCell2.setAttribute("colspan", "5");
	var headText2 = document.createTextNode("POINTS");
	createHeaderCell2.appendChild(headText2);
	document.getElementById("headerRow2").appendChild(createHeaderCell2);

	var createCell1 = document.createElement("TD");
	var rowText1 = document.createTextNode(" ");
	var createCell2 = document.createElement("TD");
	var rowText2 = document.createTextNode("PLAYED");
	var createCell3 = document.createElement("TD");
	var rowText3 = document.createTextNode("WINS");
	var createCell4 = document.createElement("TD");
	var rowText4 = document.createTextNode("LOSSES");
	var createCell5 = document.createElement("TD");
	var rowText5 = document.createTextNode("%");
	createCell1.appendChild(rowText1);
	createCell2.appendChild(rowText2);
	createCell3.appendChild(rowText3);
	createCell4.appendChild(rowText4);
	createCell5.appendChild(rowText5);
	document.getElementById("row2").appendChild(createCell1);
	document.getElementById("row2").appendChild(createCell2);
	document.getElementById("row2").appendChild(createCell3);
	document.getElementById("row2").appendChild(createCell4);
	document.getElementById("row2").appendChild(createCell5);

	var createCell6 = document.createElement("TD");
	var rowText6 = document.createTextNode(" ");
	var createCell7 = document.createElement("TD");
	var rowText7 = document.createTextNode("FOR");
	var createCell8 = document.createElement("TD");
	var rowText8 = document.createTextNode("AVERAGE");
	var createCell9 = document.createElement("TD");
	var rowText9 = document.createTextNode("AGAINST");
	var createCell10 = document.createElement("TD");
	var rowText10 = document.createTextNode("AVERAGE");
	createCell6.appendChild(rowText6);
	createCell7.appendChild(rowText7);
	createCell8.appendChild(rowText8);
	createCell9.appendChild(rowText9);
	createCell10.appendChild(rowText10);
	document.getElementById("row4").appendChild(createCell6);
	document.getElementById("row4").appendChild(createCell7);
	document.getElementById("row4").appendChild(createCell8);
	document.getElementById("row4").appendChild(createCell9);
	document.getElementById("row4").appendChild(createCell10);	
}

function loadPage(){
	var tableCheck1 = document.getElementById("statsTable1");
	var tableCheck2 = document.getElementById("statsTable2");
	var logoCheck = document.getElementById("teamLogo");
	if (tableCheck1) {
		var x = tableCheck1.parentElement;
		x.removeChild(tableCheck1);
	}
	if (tableCheck2) {
		var x = tableCheck2.parentElement;
		x.removeChild(tableCheck2);
	}
	if (logoCheck) {
		$( 'IMG' ).remove();
	}
	var season = document.getElementById("seasonSelect").value;
	var teamId = document.getElementById("teamName").value;
	getStats(season,teamId);
}

