var catalogPopup = document.querySelector(".product-added-card");
var openPopup = document.querySelectorAll(".bookmarks-btn");
var close = document.querySelector(".close-btn");
var continueBuy = document.querySelector(".continue-btn");

	[].forEach.call(openPopup,function(evt){
    evt.addEventListener('click', function (e) {
    	e.preventDefault();

    	catalogPopup.classList.remove("popup-hidden");
    })
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();

	catalogPopup.classList.add("popup-hidden");
});

continueBuy.addEventListener("click", function (evt) {
	evt.preventDefault();

	catalogPopup.classList.add("popup-hidden");
});