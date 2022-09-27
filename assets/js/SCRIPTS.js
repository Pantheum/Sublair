window.addEventListener('load', function () {
  onLoad();
})

function onLoad(){

var folder = '/images/main/'


$.getJSON(folder, data => {

  for (let i = 0; i < data.length; i++) {
    var path = folder + data[i];


    

    





  }
  
});
};



function toggleMobileMenu(menu) { 
  menu.classList.toggle('open');
};