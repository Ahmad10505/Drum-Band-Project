
var randomDrumbutton=document.querySelectorAll(".Drum").length; 
for (var i=0; i < randomDrumbutton ; i++)
document.querySelectorAll(".Drum")[0].addEventListener("click",function () {
    var audio = new Audio('./crash.mp3');
audio.play();
})
document.querySelectorAll(".Drum")[1].addEventListener("click",function () {
    var audio = new Audio('./kick-bass.mp3');
audio.play();
})
document.querySelectorAll(".Drum")[2].addEventListener("click",function () {
    var audio = new Audio('./snare.mp3');
audio.play();
})
document.querySelectorAll(".Drum")[3].addEventListener("click",function () {
    var audio = new Audio('./tom-1.mp3');
audio.play();
})
document.querySelectorAll(".Drum")[4].addEventListener("click",function () {
    var audio = new Audio('./tom-2.mp3');
audio.play();
})
document.querySelectorAll(".Drum")[5].addEventListener("click",function () {
    var audio = new Audio('./tom-3.mp3');
audio.play();
})
document.querySelectorAll(".Drum")[6].addEventListener("click",function () {
    var audio = new Audio('./tom-4.mp3');
audio.play();
})


