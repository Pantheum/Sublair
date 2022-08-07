var audio = new Audio("/assets/music/Cmaj.mp3");
var iframe = document.getElementById("dodeca");

iframe.onclick = function() {
  audio.play();
  console.log("test");
}