var k =Math.random();
var img1 = Math.floor((k*6))+1;
var l = Math.random();
var img2 = Math.floor((l * 6)) + 1;
console.log("here");


﻿
document.querySelector(".img1").setAttribute("src","images/dice" + img1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + img2 + ".png");

if(img1>img2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if(img2>img1){
    document.querySelector("h1").innerHTML="🚩 Player 2 wins";
}