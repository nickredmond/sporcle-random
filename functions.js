var ALL_ORGANIZATIONS = [
	{
		"name": "Sexual Minority Youth Assistance League",
		"donation_url": "https://app.etapestry.com/onlineforms/SexualMinorityYouthAssistance/donatenow.html",
		"logo_img_src": "img/smyal_logo_update.png",
		"keywords": ["sexual", "minority", "youth", "assistance", "league", "smyal", "lgbtq", "minority"]
	},
	{
		"name": "Nat'l Assoc. for the Advancement of Colored People",
		"donation_url": "https://donate.naacp.org/page/contribute/make-a-contribution",
		"logo_img_src": "img/NAACP_logo_2010.png",
		"keywords": ["national", "association", "advancement", "colored", "people", "naacp", "minority", "change"]
	},
	{
		"name": "Int'l Rescue Committee",
		"donation_url": "https://help.rescue.org/donate",
		"logo_img_src": "img/intl_rescue_committe.png",
		"keywords": ["international", "rescue", "committee", "irc", "humanitarian", "global"]
	},
	{
		"name": "Congressional Hispanic Caucus Institute",
		"donation_url": "https://chci.org/donate/",
		"logo_img_src": "img/chci.png",
		"keywords": ["congressional", "hispanic", "caucus", "institute", "chci", "education", "change"]
	},
	{
		"name": "Islamic Relief USA",
		"donation_url": "https://secure.irusa.org/donate/donate-now",
		"logo_img_src": "img/islamicreliefusa.png",
		"keywords": ["islamic", "relief", "usa", "irusa", "muslim", "islam", "religion"]
	},
	{
		"name": "Nat'l Resources Defense Council",
		"donation_url": "https://secure.nrdconline.org/site/Donation2?df_id=15743&15743.donation=form1",
		"logo_img_src": "img/nrdc.png",
		"keywords": ["national", "resources", "defense", "council", "nrdc", "environment", "climate"]
	}
];

var DEFAULT_ORGANIZATIONS = [
	ALL_ORGANIZATIONS[0], ALL_ORGANIZATIONS[1], ALL_ORGANIZATIONS[2],
	ALL_ORGANIZATIONS[3], ALL_ORGANIZATIONS[4], ALL_ORGANIZATIONS[5]
];
var POSITION_INDEX_MAPPING = {
	"0": { "row": "top", "col": "left" },
	"1": { "row": "top", "col": "center" },
	"2": { "row": "top", "col": "right" },
	"3": { "row": "bottom", "col": "left" },
	"4": { "row": "bottom", "col": "center" },
	"5": { "row": "bottom", "col": "right" }
};

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
	orgLinkImage(row, col).setAttribute("src", img_src);
}

function clearOrgLinks() {
	document.querySelectorAll(".linkContainer").forEach(function(container){
		container.style.visibility = "hidden";
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
		populateOrgLinks(DEFAULT_ORGANIZATIONS);
	}
	else {
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