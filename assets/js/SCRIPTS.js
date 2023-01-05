const container = document.getElementById("container")
const container2 = document.getElementById("container-2")
const hires = document.getElementById("hires")

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
  interval: 6000,
  pause: "false"
});