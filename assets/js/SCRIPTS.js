const container = document.getElementById("container")
const container2 = document.getElementById("container-2")
const hires = document.getElementById("hires")
const form  = document.getElementById("loginform")

var opacity = 0;
var isActive = 0;




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
  container.style.opacity =  opacity;

};


function toggleMobileMenu(menu) { 
  menu.classList.toggle('open')
};




function openDetails(obj){ 
  container.style.display = "none";
  container2.style.display = "block";
  hires.setAttribute( "src" , obj);


};

function closeDetails(){ 
  container.style.display = "block";
  container2.style.display = "none";
};

function showLogin(){ 
  form.style.display = "block";
}