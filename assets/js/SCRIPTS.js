var images = [];

$.getJSON('/images/engravings/', data => {

  for (let i = 0; i < data.length; i++) {
    var path = '/images/engravings/' + data[i];

    const Wrapper = document.getElementById("wrapper");

    

    const iDiv = document.createElement('box')
    const Image = document.createElement('img')
    iDiv.id = "box"
    iDiv.className = "box"
    Image.src = path



  iDiv.appendChild(Image);

    Wrapper.appendChild(iDiv);





  }
  console.log(images);
});

function toggleMobileMenu(menu) { 
  menu.classList.toggle('open');
};
