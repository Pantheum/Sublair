const parent = document.getElementById("parent")
var opacity = 0;




window.addEventListener('load', function () {
  setTimeout(() => {
    onLoad()
 }, 1000);
})


function onLoad(){
  
  if (opacity<1) {
    opacity += .1;
    setTimeout(function(){onLoad()},50);
 }
  parent.style.opacity = opacity;

};


function toggleMobileMenu(menu) { 
  menu.classList.toggle('open');
};




function moreDetails(obj){ 
  console.log(obj)
};