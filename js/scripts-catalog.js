var catalogPopup = document.querySelector('.product-added-card');
var openPopup = document.querySelectorAll('.bookmarks-btn');
var closeCardAdd = catalogPopup.querySelector('.close-btn');
var continueBuy = document.querySelector('.continue-btn');
var doOrder = catalogPopup.querySelector('.do-order-btn');

	[].forEach.call(openPopup,function(evt){
    evt.addEventListener('click', function (e) {
    	e.preventDefault();

    	catalogPopup.classList.add('product-added-card-show');
    	doOrder.focus();
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