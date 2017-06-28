console.log("homePage.js connected");
var bodySmallLeft = document.querySelector('background');
// document.querySelector('#video').controls = false;
var playButton = document.querySelector('play-pause');
var volume = document.querySelector('#volume');
var fullScreen = document.querySelector('#full-screen');
var volumeBar = document.querySelector('volume-bar');

console.log(document.querySelector('#video'));

function playVideo () {
  var video = document.querySelector('#video');
  if (video.paused) {
    video.pause();
  } else {
    video.play();
  }
}
