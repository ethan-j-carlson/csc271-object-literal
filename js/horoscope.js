function displayTitle() {
	var title = '<h1>Cosmic Horoscopes</h1>';
	var contentDiv = document.getElementById('title');
	contentDiv.innerHTML += title;
};

var cap = {
	cardNum: 0,
	img: "capricorn.png",
	sign: "Capricorn",
	birthday: "*insert dates here*",
	horoscope: "Today will be the day ever",
	stars: function (count) {
		res = ""
		for (let i = 0; i < count; i++) {
			res += "*"
		}
		return res;
	},
	
}



function displayHoroscopeCard(cardNum, img, sign, birthday, horoscope, stars) {
	var card = document.getElementsByClassName('card')[cardNum];

	card.innerHTML += '<img src="../images/' + img + '">';
	card.innerHTML += '<h3 class="sign">' + sign + '</h3>';
	card.innerHTML += '<p class="dates">' + birthday + '</p>';
	card.innerHTML += '<p class="horoscope">' + horoscope + '</p>';
	card.innerHTML += '<p><strong>Mood:</strong> ' + stars + '</p>';
};


displayTitle();

displayHoroscopeCard(cap.cardNum, cap.img, cap.sign, cap.birthday, cap.horoscope, cap.stars(1));
