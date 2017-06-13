var openRandomQuiz = function() {
	window.location.href = 'https://www.sporcle.com/games/random.php';
};

var onSearchBegin = function() {
	var queryText = document.getElementById("query").value;
	var emptyQueryWarning = document.getElementById("emptyQueryWarning");

	if (queryText && queryText.trim() !== "") {
		emptyQueryWarning.style.display = "none";
		var queryURL = "https://www.sporcle.com/search/?p=1&s=" + queryText;
		window.open(queryURL);
	}
	else {
		emptyQueryWarning.style.display = "block";
	}
};
var onSearchSubmit = function(event) {
	if (event.keyCode === 13) {
		onSearchBegin();
	}
};

var searchButton = document.getElementById("search-button");
document.getElementById("query").addEventListener("keyup", onSearchSubmit);
searchButton.addEventListener("click", onSearchBegin);