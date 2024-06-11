var chilliButton = document.querySelector(".chili")
var cornButton = document.querySelector(".corn")
var fireButton = document.querySelector(".hot")
var salt = document.querySelector(".salt")
var firewaffer = document.querySelector(".hott")
var cornwaffer = document.querySelector(".corns")
var cartButton = document.querySelector(".nav3 i")
var cart = document.querySelector(".cart")
var close = document.querySelector(".cart i")
var shopButton = document.querySelectorAll("button")
var closeShop = document.querySelector(".shop i")
var shop = document.querySelector(".shop")
console.log(shopButton);

chilliButton.addEventListener("click", function(){
   salt.style.opacity = 1;
   firewaffer.style.opacity = 0;
   cornwaffer.style.opacity = 0;
   salt.style.transition = "all ease .2s";
   chilliButton.style.backgroundColor = "#FEC91F"
   chilliButton.style.border = "solid white"
   cornButton.style.backgroundColor = "white"
   fireButton.style.backgroundColor = "white"
})


fireButton.addEventListener("click", function(){
    salt.style.opacity = 0;
    firewaffer.style.opacity = 1;
    cornwaffer.style.opacity = 0;
    firewaffer.style.transition = "all ease .2s";
    fireButton.style.backgroundColor = "#FEC91F"
    fireButton.style.border = "solid white"
    chilliButton.style.backgroundColor = "white"
    cornButton.style.backgroundColor = "white"
 })


 
cornButton.addEventListener("click", function(){
    salt.style.opacity = 0;
    firewaffer.style.opacity = 0;
    cornwaffer.style.opacity = 1;
    cornwaffer.style.transition = "all ease .2s";
    cornButton.style.backgroundColor = "#FEC91F"
    cornButton.style.border = "solid white"
    fireButton.style.backgroundColor = "white"
    chilliButton.style.backgroundColor = "white"
 })

 cartButton.addEventListener("click", function(){
    cart.style.transform = "translateX(0%)"
    cart.style.transition = "all ease .2s";
 })

 close.addEventListener("click", function(){
    cart.style.transform = "translateX(100%)"
    cart.style.transition = "all ease .2s";
 })

shopButton.forEach(function(shopButton){
   
 shopButton.addEventListener("click", function(){
    shop.style.display = "flex"
    console.log("click hoja firse");
 })
})

 closeShop.addEventListener("click", function(){
    shop.style.display = "none"
    console.log("click hoja");
 })
