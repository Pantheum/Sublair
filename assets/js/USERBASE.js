// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { getStorage, ref, getDownloadURL, listAll, getMetadata } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-storage.js";
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
const physical = ref(storage, 'images/PHYSICAL/');
const digital = ref(storage, 'images/DIGITAL/');



///// physical images
listAll(physical)
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
    inspect.onclick = function() { soundNext.play(), openDetails(url) }

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

  








  listAll(digital)
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
    const Wrapper = document.getElementById("wrapper-3");
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
    inspect.onclick = function() { soundNext.play(), openDetails(url) }

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







