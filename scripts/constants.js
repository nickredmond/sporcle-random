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

var ICON_HEIGHT = "4.5em";