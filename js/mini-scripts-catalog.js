var catalogPopup=document.querySelector(".product-added-card"),openPopup=document.querySelectorAll(".bookmarks-btn"),closeCardAdd=catalogPopup.querySelector(".close-btn"),continueBuy=document.querySelector(".continue-btn");[].forEach.call(openPopup,function(e){e.addEventListener("click",function(e){e.preventDefault(),catalogPopup.classList.add("product-added-card-show")})}),closeCardAdd.addEventListener("click",function(e){e.preventDefault(),catalogPopup.classList.remove("product-added-card-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&catalogPopup.classList.contains("product-added-card-show")&&catalogPopup.classList.remove("product-added-card-show")}),continueBuy.addEventListener("click",function(e){e.preventDefault(),catalogPopup.classList.remove("product-added-card-show")});