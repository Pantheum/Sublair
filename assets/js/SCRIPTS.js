var container = document.getElementById("shapecontainer");
var screen = document.getElementById("screen");
var imgpth = "images/assets/crt_";


function loadmodel(shape){

if (shape == 'TET'){
container.src="https://sketchfab.com/models/380aaa29fe76449ca75f1296d1563a5c/embed?autostart=1"
}

if  (shape == 'HEX'){
    
    container.src="https://sketchfab.com/models/eb131ddd18ff4b9e8e669072f6a082ec/embed?autostart=1"
    
    }

    if (shape ==  'OCT') {
       
        container.src="https://sketchfab.com/models/b7bb26ac6bbd4468830f1123d59b49b1/embed?autostart=1"
        
        }
        
        if (shape ==  'DOD') {
         
            container.src="https://sketchfab.com/models/d7fe6a842017446eb5ea09e3e22d9e2d/embed?autostart=1"
            }

            if (shape ==  'ICO') {
        
                container.src="https://sketchfab.com/models/83e14f308de6484abbd24982263414ab/embed?autostart=1"
    
                }
    
};


function toggleMobileMenu(menu) { 
    menu.classList.toggle('open');
};

function loadimg(toload) {

    if (toload == 001) {
        screen.src = "images/assets/crt_001.png";
    };

    if (toload == 002) {
        screen.src = "images/assets/crt_002.png";
    };

    if (toload == 003) {
        screen.src = "images/assets/crt_003.png";
    };

    if (toload == 004) {
        screen.src = "images/assets/crt_004.png";
    };

    if (toload == 005) {
        screen.src = "images/assets/crt_005.png";
    };

    if (toload == 006) {
        screen.src = "images/assets/crt_006.png";
    };

    if (toload == 007) {
        screen.src = "images/assets/crt_007.png";
    };

    if (toload == 008) {
        screen.src = "images/assets/crt_008.png";
    };
    

    


};