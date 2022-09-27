window.addEventListener('load', function () {
  onLoad();
})

function onLoad(){
var images = [];
var folder = '/images/main/'


$.getJSON(folder, data => {

  for (let i = 0; i < data.length; i++) {
    var path = folder + data[i];


    const Wrapper = document.getElementById("wrapper");

    

    const iDiv = document.createElement('box')
    const Image = document.createElement('img')
    iDiv.id = "box"
    iDiv.className = "box"
    Image.src = path



  iDiv.appendChild(Image);

    Wrapper.appendChild(iDiv);

    console.log(path);





  }
  
});
};



function toggleMobileMenu(menu) { 
  menu.classList.toggle('open');
};