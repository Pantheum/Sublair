window.addEventListener('load', function () {
  onLoad();
})



function onLoad(){
var images = [];



$.getJSON('sublair.com/images/main/', data => {

  for (let i = 0; i < data.length; i++) {
    var path = 'sublair.com/images/main/' + data[i];
    window.alert(path);

    const Wrapper = document.getElementById("wrapper");

    

    const iDiv = document.createElement('box')
    const Image = document.createElement('img')
    iDiv.id = "box"
    iDiv.className = "box"
    Image.src = path



  iDiv.appendChild(Image);

    Wrapper.appendChild(iDiv);





  }
  
});



function toggleMobileMenu(menu) { 
  menu.classList.toggle('open');
};

}
