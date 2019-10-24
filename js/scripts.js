var loginBtn = document.querySelector('.write-us-btn');
var popup = document.querySelector('.write-box');
var linkAlternativeMap = document.querySelector(".map-link");

var close = popup.querySelector('.close-btn');
var login = popup.querySelector('[name="nameUser"]');

var submit = popup.querySelector('.submit-btn');
var email = popup.querySelector('[name="email"]');
var rewiev = popup.querySelector('[name="text-User]');

linkAlternativeMap.addEventListener('click', function(evt) {
	evt.preventDefault();
});

isStorageSupport = true;
var storage = '';


loginBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.add('modal-show');
	login.focus();

	if (storage) {
		login.value = storage;
		email.value = storage;
	} else {
		rewiev.focus();
	}

	if (!storage) {
		login.focus();
	}

	try {
		storage = localStorage.getItem('login');
	} catch (err) {
		isStorageSupport = false;
	}
})

close.addEventListener('click', function(evt) {
	evt.preventDefault();

	popup.classList.remove('modal-show');
	popup.classList.remove('modal-error');
})

submit.addEventListener('click', function(evt) {
	if (!login.value || !email.value) {
		popup.classList.add('modal-error');
	} else {
		localStorage.setItem('login', login.value);
		localStorage.setItem('email', email.value);
	}

	if (isStorageSupport) {
		localStorage.setItem('login', login.value);
		localStorage.setItem('email', email.value);
	}

	evt.preventDefault();
});

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains('modal-show')) {
			evt.preventDefault();

			popup.classList.remove('modal-show');
			popup.classList.remove('modal-error');
		}
	}

});

var listDelivery = document.querySelector('.services-list-delivery');
var listGaranty = document.querySelector('.services-list-garanty');
var listCredit = document.querySelector('.services-list-credit');

var blockDelivery = document.querySelector('.delivery-desc');
var blockGaranty  = document.querySelector('.garanty');
var blockCredit = document.querySelector('.credit');

listDelivery.addEventListener('click', function (evt) {
	evt.preventDefault();

	blockGaranty.classList.add('block-hidden');
	blockCredit.classList.add('block-hidden');
	blockDelivery.classList.remove('block-hidden');

	listGaranty.classList.remove('services-item-active');
	listCredit.classList.remove('services-item-active');
	listDelivery.classList.add('services-item-active');
});

listGaranty.addEventListener('click', function (evt) {
	evt.preventDefault();

	blockDelivery.classList.add('block-hidden');
	blockCredit.classList.add('block-hidden');
	blockGaranty.classList.remove('block-hidden');

	listGaranty.classList.add('services-item-active');
	listDelivery.classList.remove('services-item-active');
	listCredit.classList.remove('services-item-active');
});

listCredit.addEventListener('click', function (evt) {
	evt.preventDefault();

	blockGaranty.classList.add('block-hidden');
	blockDelivery.classList.add('block-hidden');
	blockCredit.classList.remove('block-hidden');

	listGaranty.classList.remove('services-item-active');
	listDelivery.classList.remove('services-item-active');
	listCredit.classList.add('services-item-active');
});

var catalogPopup = document.querySelector('.product-added-card');
var openPopup = document.querySelectorAll('.bookmarks-btn');
var closeCardAdd = catalogPopup.querySelector('.close-btn');
var continueBuy = document.querySelector('.continue-btn');

	[].forEach.call(openPopup,function(evt){
    evt.addEventListener('click', function (e) {
    	e.preventDefault();

    	catalogPopup.classList.add('product-added-card-show');
    })
});

closeCardAdd.addEventListener('click', function (evt) {
	evt.preventDefault();

	catalogPopup.classList.remove('product-added-card-show');
});

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		if (catalogPopup.classList.contains('product-added-card-show')) {
			catalogPopup.classList.remove('product-added-card-show');
		}
	}
});

continueBuy.addEventListener('click', function (evt) {
	evt.preventDefault();

	catalogPopup.classList.remove('product-added-card-show');
});

var nextBtnSlaider = document.querySelectorAll('.next-btn');
var	backBtnSlaider = document.querySelectorAll('.back-btn');

var slaideOne = document.querySelector('.slaide-1');
var slaideTwo = document.querySelector('.slaide-2');

[].forEach.call(nextBtnSlaider,function(evt){
    evt.addEventListener('click', function (e) {
    	e.preventDefault();

    	slaideOne.classList.add("slaide-hidden");
    	slaideTwo.classList.remove("slaide-hidden");
    })
});

[].forEach.call(backBtnSlaider,function(evt){
    evt.addEventListener("click", function (e) {
    	e.preventDefault();

    	slaideOne.classList.remove("slaide-hidden");
    	slaideTwo.classList.add("slaide-hidden");
    })
});

var mapPopup = document.querySelector(".big-map");
var mapOpen = document.querySelector(".mini-map-img");
var closeMap = mapPopup.querySelector(".close-btn");

mapOpen.addEventListener("click", function(evt) {
	mapPopup.classList.add("big-map-show");
});


linkAlternativeMap.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 13) {
		if (mapPopup.classList.contains("big-map-show")) {
			mapPopup = true;
		} else {
			mapPopup.classList.add("big-map-show");
		}
	}
}); //- при нажатии на мини-карту с помощью Enter, открывалась большая карта

closeMap.addEventListener("click", function(evt) {
	evt.preventDefault();

	mapPopup.classList.remove("big-map-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("big-map-show")) {
			evt.preventDefault();

			mapPopup.classList.remove("big-map-show");
		}
	}
});
