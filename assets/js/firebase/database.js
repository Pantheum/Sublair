import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

// firestore

const db = getDatabase();


 function writeData (gen, name, path, hash) { 

  const reference = ref(db, 'root/nodes/' + gen  );

    set(reference, { 
      key : gen , 
      path : path,
      filename : name,
      hash: hash,
      tokens : { 1: "", 2: "" , 3: "" }
    });
 
  }

  function readData (){   


  const reference = ref(db, 'root/nodes/');

  onValue(reference, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });



  };



  export { writeData , readData }