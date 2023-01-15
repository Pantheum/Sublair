// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { getStorage, ref, getDownloadURL, listAll, getMetadata, deleteObject } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-storage.js";
import { soundHover, soundNext, soundPrev } from "./sounds.js"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT6BViuD1HQdnzzRnvd0CZo2N0SU07LtM",
  authDomain: "sublair-a2ded.firebaseapp.com",
  projectId: "sublair-a2ded",
  storageBucket: "sublair-a2ded.appspot.com",
  messagingSenderId: "652616157969",
  appId: "1:652616157969:web:9cb1ec1a88b3ce4dfb5ab0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// file storage
const storage = getStorage(app);
const CLOTHING = ref(storage, 'images/CLOTHING/');
const PRINTS = ref(storage, 'images/PRINTS/');



//////CLOTHING
listAll(CLOTHING)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
    });
    res.items.forEach((itemRef) => {
      
      
        getDownloadURL(ref(storage, itemRef))
  .then((url) => {
    
    // `url` is the download URL for 'images/PHYSICAL/image.jpg'

    // creating div and attaching to main wrapper
    const Wrapper = document.getElementById("wrapper");
    const iDiv = document.createElement('div')
    const hoverDiv = document.createElement('div')
    const inspect = document.createElement('button')
    const Image = document.createElement('img')

    iDiv.id = "box"
    iDiv.className = "box"
    iDiv.addEventListener('mouseenter', (event) => { soundHover.play() });
   

    hoverDiv.id = "hover-menu"
    hoverDiv.className = "hover-menu"


    inspect.innerHTML = "View Item"
    inspect.onclick = function() { soundNext.play(), opendetailsClothing(url) }

    Image.src = url

    

    
    
    hoverDiv.appendChild(inspect);
    iDiv.appendChild(hoverDiv);
    iDiv.appendChild(Image); 
    
  
  Wrapper.appendChild(iDiv);
    
  })
  .catch((error) => {
    // Handle any errors
  });

    });
  }).catch((error) => {
    console.log(error)
  });

  


  



  //////PRINTS


  var fragCount = 0;
  var fragLabel = document.getElementById("fragCount");

export function listPrints(){ 

  const Wrapper = document.getElementById("wrapper-3");
  Wrapper.innerHTML = "";


  listAll(PRINTS)
  .then((res) => {
    
    res.items.forEach((itemRef) => {
      fragCount ++;

  // creating div and attaching to main wrapper
  const Wrapper = document.getElementById("wrapper-3");
  const iDiv = document.createElement('div')
  const hoverDiv = document.createElement('div')
  const inspect = document.createElement('button')
  const Image = document.createElement('img')
  
  

  iDiv.id = "box"
  iDiv.className = "box"
  iDiv.addEventListener('mouseenter', (event) => { soundHover.play() });

  getMetadata(ref(storage, itemRef))
  .then((metadata) => {

  Image.alt = metadata.fullPath
  })
  .catch((error) => {
    // Handle any errors
  });


  
 

  hoverDiv.id = "hover-menu"
  hoverDiv.className = "hover-menu"

  

  
  getDownloadURL(ref(storage, itemRef))
  .then((url) => {
  Image.src = url;
  })
  .catch((error) => {
    // Handle any errors
  });



  




  inspect.innerHTML = "View Fragment"
  inspect.onclick = function() { soundNext.play(), opendetailsPrints(Image.src, Image.alt,  ) }

  

  

  
  
  hoverDiv.appendChild(inspect);
  iDiv.appendChild(hoverDiv);
  iDiv.appendChild(Image); 
  

Wrapper.appendChild(iDiv);



if (fragCount > 0) {
  fragLabel.innerHTML  = fragCount + " : 50 <br> Fragments remain"
  fragLabel.style.color = "white"
} 


    



    });
  }).catch((error) => {
    console.log(error)
  });

}
listPrints();
if (fragCount == 0){
  fragLabel.innerHTML = "SOLD OUT"
  fragLabel.style.color = "red"
}



 

   export function deleteFile (product){ 
  
    const delRef = ref(storage, product);

    // Delete the file


deleteObject(delRef).then(() => {

  console.log("file deleted")

}).catch((error) => {
  console.log(error);
});


  }


  