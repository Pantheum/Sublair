var container = document.getElementById("shapecontainer");


function loadmodel(shape){

if (shape == 'TET'){
container.src="https://sketchfab.com/models/380aaa29fe76449ca75f1296d1563a5c/embed?autospin=1&autostart=1"
}

if  (shape == 'HEX'){
    
    container.src="https://sketchfab.com/models/eb131ddd18ff4b9e8e669072f6a082ec/embed?autospin=1&autostart=1"
    
    }

    if (shape ==  'OCT') {
       
        container.src="https://sketchfab.com/models/b7bb26ac6bbd4468830f1123d59b49b1/embed?autospin=1&autostart=1"
        
        }
        
        if (shape ==  'DOD') {
         
            container.src="https://sketchfab.com/models/d7fe6a842017446eb5ea09e3e22d9e2d/embed?autospin=1&autostart=1"
            }

            if (shape ==  'ICO') {
        
                container.src="https://sketchfab.com/models/83e14f308de6484abbd24982263414ab/embed?autospin=1&autostart=1"
    
                }
    



};