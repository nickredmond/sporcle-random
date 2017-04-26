function orgLinkAnchor(row, col) {
	return document.querySelector("#link-" + row + "-" + col + " > a");
}
function orgLinkImage(row, col) {
	return document.querySelector("#link-" + row + "-" + col + " > a > img");
}
function setDonationUrl(row, col, donation_url) {
	orgLinkAnchor(row, col).setAttribute("href", donation_url);
}
function setLinkTitle(row, col, title) {
	orgLinkAnchor(row, col).setAttribute("title", title);
}
function setLogoImgSrc(row, col, img_src) {
	var img = orgLinkImage(row, col);
	img.setAttribute("src", img_src);
	img.style.height = ICON_HEIGHT;
}

function clearOrgLinks() {
	document.querySelectorAll(".linkContainer").forEach(function(container){
		container.style.visibility = "hidden";
	});
	document.querySelectorAll(".linkIcon").forEach(function(icon){
		icon.style.height = "0";
	});
}
function populateOrgLink(row, col, organization) {
	document.querySelector("#link-" + row + "-" + col).style.visibility = "visible";
	setDonationUrl(row, col, organization["donation_url"]);
	setLinkTitle(row, col, organization["name"]);
	setLogoImgSrc(row, col, organization["logo_img_src"]);
}
function populateOrgLinks(organizations) {
	clearOrgLinks();
	for (var i = 0; i < organizations.length && i < 6; i++) {
		var key = i.toString();
		populateOrgLink(
			POSITION_INDEX_MAPPING[key]["row"],
			POSITION_INDEX_MAPPING[key]["col"],
			organizations[i]
		);
	}
}

function isResultsFound(isHidden) {
	var label = document.getElementById("no_results");
	if (isHidden) {
		label.style.visibility = "hidden";
		label.style.display = "none";
	}
	else {
		label.style.visibility = "visible";
		label.style.display = "block";
	}
}
function filterOrganizationsByKeyword(query) {
	filterResults = [];
	ALL_ORGANIZATIONS.forEach(function(organization){
		var numKeywordsMatched = 0;
		organization["keywords"].forEach(function(keyword){
			if (query.indexOf(keyword) >= 0 || keyword.indexOf(query) >= 0){
				numKeywordsMatched += 1;
				console.log("hell yeah " + keyword + " " + query);
			}
		});
		filterResults.push({
			"orgName": organization["name"], 
			"matches": numKeywordsMatched
		});
	});
	filterResults = filterResults.filter(function(result){
		return (result["matches"] > 0);
	});
	console.log("rez " + JSON.stringify(filterResults));

	if (filterResults.length === 0) {
		clearOrgLinks();
		isResultsFound(false);
	}
	else {
		isResultsFound(true);
		var sortedResults = filterResults.sort(function(a, b){
			return b["matches"] - a["matches"];
		});
		var filteredOrgs = [];
		sortedResults.forEach(function(result){
			var org = ALL_ORGANIZATIONS.find(function(organization){
				return organization["name"] === result["orgName"];
			});
			filteredOrgs.push(org);
		});
		populateOrgLinks(filteredOrgs);
	}
}

document.getElementById("query").addEventListener("input", function(){
	filterOrganizationsByKeyword(this.value);
});
populateOrgLinks(DEFAULT_ORGANIZATIONS);