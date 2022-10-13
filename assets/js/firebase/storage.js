import { getStorage, ref, getDownloadURL, listAll, getMetadata } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-storage.js";
import { app } from "./initialize.js"
import { soundHover, soundNext, soundPrev } from "../sounds.js"
import { writeData, readData } from "./database.js";



// file storage
const storage = getStorage(app);
const listRef = ref(storage, 'images/');




///// List references
listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
    });


    res.items.forEach((itemRef) => {
      
        getDownloadURL(ref(storage, itemRef))
  .then((url) => {
    // `url` is the download URL for iamge

    // creating div and attaching to main wrapper
    const Wrapper = document.getElementById("wrapper");
    const iDiv = document.createElement('div')
    const hoverDiv = document.createElement('div')
    const inspect = document.createElement('i')
    const Image = document.createElement('img')

    iDiv.id = "box"
    iDiv.className = "box"
    iDiv.addEventListener('mouseenter', (event) => { soundHover.play() });
   

    hoverDiv.id = "hover-menu"
    hoverDiv.className = "hover-menu"


    inspect.className = "fa-solid fa-window-maximize"
    inspect.onclick = function() { soundNext.play(), openDetails(url) }

    Image.src = url

    hoverDiv.appendChild(inspect);

    iDiv.appendChild(hoverDiv);
    iDiv.appendChild(Image); 
    
  
  Wrapper.appendChild(iDiv);

  getMetadata(itemRef)
.then((metadata) => {

  const gen = metadata.generation
  const hash = metadata.md5Hash
  const name = metadata.name
  const path = url;

  writeData(gen, name, path, hash);
  
})

  

  })

  


  .catch((error) => {
    console.log(error)
  });

  // Get metadata properties





    });
  }).catch((error) => {
    console.log(error)
  });



