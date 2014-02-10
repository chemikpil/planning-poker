(function () {
	var estimatingLink = document.querySelector('a[href="#estimating"]'),
		cards = document.querySelectorAll('.card'),
		userEvent = ('ontouchend' in document) ? 'touchend' : 'click';

	var changePageTrigger = function (event) {
		event.preventDefault();

		var page = event.currentTarget.href.split('#')[1];
		changePage(page);
	};

	var changePage = function (page) {
		document.querySelector('.page.is-active').classList.remove('is-active');
		document.querySelector('#' + page).classList.add('is-active');
	};

	var chooseCardTrigger = function (event) {
		var card = event.currentTarget;
		
		toggleCard(card);
	}

	var toggleCard = function (card) {
		card.classList.toggle('is-active');
		card.parentNode.classList.toggle('has-choosen');
	};

	estimatingLink.addEventListener(userEvent, changePageTrigger, false);

	Array.prototype.forEach.call(cards, function (card) {
		card.addEventListener(userEvent, chooseCardTrigger, false);
	});
})();