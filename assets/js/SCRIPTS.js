


const parent = document.getElementById("parent");
const mainBanner=document.getElementById("main-banner")

const container = document.getElementById("container")
const container2 = document.getElementById("container-2")

const wrpper = document.getElementById("wrapper");
const wrpper3 = document.getElementById("wrapper-3");


const about = document.getElementById("about");
const hires = document.getElementById("hires");
const Price  = document.getElementById("Price");
const itemDesc = document.getElementById("itemDesc");
const filePath = document.getElementById("filePath");



const noti = document.getElementById("noti");
const notiTitle =  document.getElementById("notiTitle");
const notiDesc =  document.getElementById("notiDesc");


var opacity = 0;
var isActive = 0;


printsTab();

window.addEventListener('load', function () {
  setTimeout(() => {
    onLoad()
 }, 1000);
})


function initialize(){ 

  container.style.display="block"
  mainBanner.style.display = "none" ;
  document.getElementById('container').scrollIntoView();

}

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


function opendetailsClothing(obj){ 
  container.style.display = "none";
  container2.style.display = "block";
  container2.scrollIntoView();

  hires.setAttribute( "src" , obj);
  
  Item.innerHTML = "Physical"
  Price.innerHTML = "$66.66"
};



 function opendetailsPrints(obj, name){ 


  
  filePath.innerHTML = name
  
  
  container.style.display = "none";
  container2.style.display = "block";
  container2.scrollIntoView();

  hires.setAttribute( "src" , obj);
  
  filePath.style.display = "none"
  
  
  about.innerHTML = "This fragment was harvested by the <a href= https://www.instagram.com/_mindfabric>Mind Fabric</a> using compound fractal algorithms. They are being sold and distributed on the Sublair. Once purchased, this 1:1 fragment shall be removed from the public ledger, assigned an identification number and shipped to your location. Choose wisely for this affects the rest of your existance here within the Sublair. Thank you."

  itemDesc.innerHTML = "1:1 <br> Physical Print <br> 13 inch. x 19 inch."
  Price.innerHTML = "$44.44"
};



function closeDetails(){ 

  hires.setAttribute( "src", "");
  container.style.display = "block";
  container2.style.display = "none";
  container.scrollIntoView();

};

function notiPop(result) {



if (result == "Success") { 
  parent.style.display = "none";
noti.style.display = "block";
  notiTitle.innerHTML = "CONGRATULATIONS"
  notiDesc.innerHTML = "You now own a fragment of the Sublair. <br> <br> Your fragment has been removed from the public ledger and is en-route to your location. Thank you."

} 

else if (result == "Failed") {
  parent.style.display = "none";
noti.style.display = "block"; 
  notiTitle.innerHTML = "FAILED"
  notiDesc.innerHTML = "Something occured that prevented the processing of this transaction. Please Try Again. Thank you."


}


}







function clothingTab(){
  wrpper.style.display = "grid"
  wrpper3.style.display ="none"

}

function printsTab(){
  wrpper.style.display = "none"
  wrpper3.style.display = "grid"

}





var $item = $('.carousel-item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 00000,
  pause: "false"
});