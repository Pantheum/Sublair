export var soundHover = new Howl({
    src: [
      'https://jackrugile.com/sounds/misc/lock-button-1.mp3',
      'https://jackrugile.com/sounds/misc/lock-button-1.ogg'
    ],
    volume: 0.2,
    rate: 3
  });

  export var soundNext = new Howl({
    src: [
        'https://jackrugile.com/sounds/misc/lock-button-4.mp3',
          'https://jackrugile.com/sounds/misc/lock-button-4.ogg'
      ],
    volume: .2, 
    rate: 3
    
  });



   export var soundPrev = new Howl({
    src: [
        'https://jackrugile.com/sounds/misc/lock-button-4.mp3',
        'https://jackrugile.com/sounds/misc/lock-button-4.ogg'
    ],
    volume: 0.6,
    rate: 1
  });





  ///// ADDING SOUNDS TO DOM ELEMENTS

  document.getElementById('navicons').onclick = function() { soundPrev.play(); }
  document.getElementById('hamburger-icon').onclick = function() { soundNext.play(), toggleMobileMenu(this) }