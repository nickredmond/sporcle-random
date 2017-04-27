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
	},
	//*** ----- ***//
	{
		"name": "Cancer Research Institute",
		"donation_url": "https://www.cancerresearch.org/we-are-cri/join-the-cause/donations/one-time-donation",
		"logo_img_src": "img/cri.png",
		"keywords": ["cancerresearch", "cancer", "research", "institute", "cri", "health", "illness"]
	},
	{
		"name": "African Wildlife Foundation",
		"donation_url": "https://secure.awf.org/support-african-wildlife-foundation",
		"logo_img_src": "img/awf.png",
		"keywords": ["african", "wildlife", "foundation", "awf", "animals", "environment", "nature"]
	},
	{
		"name": "Animal Welfare Institute",
		"donation_url": "https://awionline.org/content/make-donation-awi",
		"logo_img_src": "img/awi.png",
		"keywords": ["animal", "welfare", "institute", "awi", "nature", "environment"]
	},
	{
		"name": "Center for Community Change",
		"donation_url": "https://join.communitychange.org/page/contribute/donate-now-center-for-community-change",
		"logo_img_src": "img/ccc.png",
		"keywords": ["center", "community", "change", "ccc", "humanitarian"]
	},
	{
		"name": "Fund for Global Human Rights",
		"donation_url": "https://salsa4.salsalabs.com/o/51404/donate_page/donate-today",
		"logo_img_src": "img/fghr.png",
		"keywords": ["fund", "global", "human", "rights", "fghr", "humanitarian"]
	},
	{
		"name": "Environmental Defense Fund",
		"donation_url": "https://secure2.edf.org/site/Donation2?df_id=18325&18325.donation=form1",
		"logo_img_src": "img/edf.png",
		"keywords": ["environmental", "defense", "fund", "edf", "environment", "nature"]
	},
	{
		"name": "Foundation for Individ. Rights in Education",
		"donation_url": "https://www.thefire.org/donate/",
		"logo_img_src": "img/fire.png",
		"keywords": ["foundation", "individual", "rights", "education", "fire", "school", "liberty"]
	},
	{
		"name": "American Foundation for Suicide Prevention",
		"donation_url": "https://afsp.org/take-action/give-a-gift/",
		"logo_img_src": "img/afsp.png",
		"keywords": ["american", "foundation", "suicide", "prevention", "mental", "health", "illness"]
	},
	{
		"name": "United Service Organizations",
		"donation_url": "https://secure.uso.org/scc-2/?sc=WEBDONATE&show_amount=true",
		"logo_img_src": "img/uso.png",
		"keywords": ["united", "service", "organizations", "uso", "veterans", "military", "armed", "forces"]
	},
	{
		"name": "Wounded Warrior Project",
		"donation_url": "https://support.woundedwarriorproject.org",
		"logo_img_src": "img/wounded-warrior.png",
		"keywords": ["wounded", "warrior", "project", "wwp", "veterans", "military", "armed", "forces"]
	},
	{
		"name": "Int'l Coalition for Religious Freedom",
		"donation_url": "http://www.religiousfreedom.com/index.php?option=com_jdonation",
		"logo_img_src": "img/religious-freedom.png",
		"keywords": ["international", "coalition", "religious", "freedom", "religion", "civil", "rights", "liberty"]
	},
	{
		"name": "Books from Birth",
		"donation_url": "https://www.booksfrombirth.org/donate",
		"logo_img_src": "img/booksfrombirth.png",
		"keywords": ["books", "from", "birth", "education", "community", "dolly", "parton", "imagination", "library"]
	},
	{
		"name": "YMCA of the USA",
		"donation_url": "https://secure2.convio.net/ymca/site/Donation2?df_id=2261&2261.donation=form1",
		"logo_img_src": "img/ymca.png",
		"keywords": ["ymca", "usa", "young", "men", "christian", "association", "community", "children", "humanitarian"]
	},
	{
		"name": "American Foundation for Children with AIDS",
		"donation_url": "https://www.givedirect.org/donate/?cid=8499",
		"logo_img_src": "img/afcaids.png",
		"keywords": ["american", "foundation", "children", "aids", "afcaids", "hiv", "illness", "health"]
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