var apiURL = "https://api-basketball.p.rapidapi.com";
var apiKey = "a13e46a545mshf3f69d2ddffc148p171dbajsn99947fd9e8b0"

function getStandings(teamId) {
	var url = "";
	if (teamId > 0) {
		url = apiURL + "/standings?league=12&season=2019-2020&team=" + teamId;
	} else {
		url = apiURL + "/standings?league=12&season=2019-2020";
	}
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.setRequestHeader("x-rapidapi-key", apiKey);
	xhr.setRequestHeader("Access-Control-Allow-Origin", apiURL);
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === this.DONE) {
			var apiResponse = JSON.parse(this.responseText);
			createHeaderRows();
			var j = apiResponse.response[0].length;
			for (var i = 0; i<j; i++) {
				var position = apiResponse.response[0][i].position;
				var conference = apiResponse.response[0][i].group.name;
				var teamLogoId = apiResponse.response[0][i].team.id;
				var teamName = apiResponse.response[0][i].team.name;
				var logo = "images/nba/" + teamLogoId +".png";
				var teamLogoUrl = document.createElement("IMG");
				teamLogoUrl.setAttribute("src", logo);
				teamLogoUrl.setAttribute("width", "30");
				teamLogoUrl.setAttribute("height", "30");
				//document.getElementById("teamLogo").appendChild(teamLogoUrl);
				var totalWins = apiResponse.response[0][i].games.win.total;
				var totalWinPercentage = apiResponse.response[0][i].games.win.percentage;
				var totalLoses = apiResponse.response[0][i].games.lose.total;
				var pointsFor = apiResponse.response[0][i].points.for;
				var pointsAgainst = apiResponse.response[0][i].points.against;

				if(conference === "Western Conference") {
					var row = document.createElement("TR");
					row.setAttribute("id", "row_"+i);
					document.getElementById("statsTable1").appendChild(row);

					var createCell1 = document.createElement("TD");
					var cellText1 = document.createTextNode(position);
					var createCell2 = document.createElement("TD");
					var createCell3 = document.createElement("TD");
					var cellText3 = document.createTextNode(teamName);
					var createCell4 = document.createElement("TD");
					var cellText4 = document.createTextNode(totalWins);
					var createCell5 = document.createElement("TD");
					var cellText5 = document.createTextNode(totalWinPercentage);
					var createCell6 = document.createElement("TD");
					var cellText6 = document.createTextNode(totalLoses);
					var createCell7 = document.createElement("TD");
					var cellText7 = document.createTextNode(pointsFor);
					var createCell8 = document.createElement("TD");
					var cellText8 = document.createTextNode(pointsAgainst);


					createCell1.appendChild(cellText1);
					createCell2.appendChild(teamLogoUrl);
					createCell3.appendChild(cellText3);
					createCell4.appendChild(cellText4);
					createCell5.appendChild(cellText5);
					createCell6.appendChild(cellText6);
					createCell7.appendChild(cellText7);
					createCell8.appendChild(cellText8);
					document.getElementById("row_"+i).appendChild(createCell1);
					document.getElementById("row_"+i).appendChild(createCell2);
					document.getElementById("row_"+i).appendChild(createCell3);
					document.getElementById("row_"+i).appendChild(createCell4);
					document.getElementById("row_"+i).appendChild(createCell5);
					document.getElementById("row_"+i).appendChild(createCell6);
					document.getElementById("row_"+i).appendChild(createCell7);
					document.getElementById("row_"+i).appendChild(createCell8);
				}
				if(conference === "Eastern Conference") {
					var row = document.createElement("TR");
					row.setAttribute("id", "row_"+i);
					document.getElementById("statsTable2").appendChild(row);

					var createCell1 = document.createElement("TD");
					var cellText1 = document.createTextNode(position);
					var createCell2 = document.createElement("TD");
					var createCell3 = document.createElement("TD");
					var cellText3 = document.createTextNode(teamName);
					var createCell4 = document.createElement("TD");
					var cellText4 = document.createTextNode(totalWins);
					var createCell5 = document.createElement("TD");
					var cellText5 = document.createTextNode(totalWinPercentage);
					var createCell6 = document.createElement("TD");
					var cellText6 = document.createTextNode(totalLoses);
					var createCell7 = document.createElement("TD");
					var cellText7 = document.createTextNode(pointsFor);
					var createCell8 = document.createElement("TD");
					var cellText8 = document.createTextNode(pointsAgainst);


					createCell1.appendChild(cellText1);
					createCell2.appendChild(teamLogoUrl);
					createCell3.appendChild(cellText3);
					createCell4.appendChild(cellText4);
					createCell5.appendChild(cellText5);
					createCell6.appendChild(cellText6);
					createCell7.appendChild(cellText7);
					createCell8.appendChild(cellText8);
					document.getElementById("row_"+i).appendChild(createCell1);
					document.getElementById("row_"+i).appendChild(createCell2);
					document.getElementById("row_"+i).appendChild(createCell3);
					document.getElementById("row_"+i).appendChild(createCell4);
					document.getElementById("row_"+i).appendChild(createCell5);
					document.getElementById("row_"+i).appendChild(createCell6);
					document.getElementById("row_"+i).appendChild(createCell7);
					document.getElementById("row_"+i).appendChild(createCell8);
				}

			}
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
	createHeaderCell1.setAttribute("colspan", "8");
	var headText1 = document.createTextNode("WESTERN CONFERENCE");
	createHeaderCell1.appendChild(headText1);
	document.getElementById("headerRow").appendChild(createHeaderCell1);

	var createHeaderCell2 = document.createElement("TH");
	createHeaderCell2.setAttribute("colspan", "8");
	var headText2 = document.createTextNode("EASTERN CONFERENCE");
	createHeaderCell2.appendChild(headText2);
	document.getElementById("headerRow2").appendChild(createHeaderCell2);

	var createCell1 = document.createElement("TD");
	var rowText1 = document.createTextNode("POSITION");
	var createCell2 = document.createElement("TD");
	var rowText2 = document.createTextNode("LOGO");
	var createCell3 = document.createElement("TD");
	var rowText3 = document.createTextNode("TEAM NAME");
	var createCell4 = document.createElement("TD");
	var rowText4 = document.createTextNode("WIN");
	var createCell5 = document.createElement("TD");
	var rowText5 = document.createTextNode("LOSS");
	var createCell6 = document.createElement("TD");
	var rowText6 = document.createTextNode("%");
	var createCell7 = document.createElement("TD");
	var rowText7 = document.createTextNode("PF");
	var createCell8 = document.createElement("TD");
	var rowText8 = document.createTextNode("PA");
	createCell1.appendChild(rowText1);
	createCell2.appendChild(rowText2);
	createCell3.appendChild(rowText3);
	createCell4.appendChild(rowText4);
	createCell5.appendChild(rowText5);
	createCell6.appendChild(rowText6);
	createCell7.appendChild(rowText7);
	createCell8.appendChild(rowText8);
	document.getElementById("row2").appendChild(createCell1);
	document.getElementById("row2").appendChild(createCell2);
	document.getElementById("row2").appendChild(createCell3);
	document.getElementById("row2").appendChild(createCell4);
	document.getElementById("row2").appendChild(createCell5);
	document.getElementById("row2").appendChild(createCell6);
	document.getElementById("row2").appendChild(createCell7);
	document.getElementById("row2").appendChild(createCell8);

	var createCell9 = document.createElement("TD");
	var rowText9 = document.createTextNode("POSITION");
	var createCell10 = document.createElement("TD");
	var rowText10 = document.createTextNode("LOGO");
	var createCell11 = document.createElement("TD");
	var rowText11 = document.createTextNode("TEAM NAME");
	var createCell12 = document.createElement("TD");
	var rowText12 = document.createTextNode("WIN");
	var createCell13 = document.createElement("TD");
	var rowText13 = document.createTextNode("LOSS");
	var createCell14 = document.createElement("TD");
	var rowText14 = document.createTextNode("%");
	var createCell15 = document.createElement("TD");
	var rowText15 = document.createTextNode("PF");
	var createCell16 = document.createElement("TD");
	var rowText16 = document.createTextNode("PA");
	createCell9.appendChild(rowText9);
	createCell10.appendChild(rowText10);
	createCell11.appendChild(rowText11);
	createCell12.appendChild(rowText12);
	createCell13.appendChild(rowText13);
	createCell14.appendChild(rowText14);
	createCell15.appendChild(rowText15);
	createCell16.appendChild(rowText16);
	document.getElementById("row4").appendChild(createCell9);
	document.getElementById("row4").appendChild(createCell10);
	document.getElementById("row4").appendChild(createCell11);
	document.getElementById("row4").appendChild(createCell12);
	document.getElementById("row4").appendChild(createCell13);
	document.getElementById("row4").appendChild(createCell14);
	document.getElementById("row4").appendChild(createCell15);
	document.getElementById("row4").appendChild(createCell16);
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
	var teamId = document.getElementById("teamName").value;
	getStandings(teamId);
}

