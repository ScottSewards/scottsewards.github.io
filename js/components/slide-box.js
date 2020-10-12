
//https://developers.google.com/web/fundamentals/web-components/customelements

class SlideBox extends HTMLElement {
  constructor() {
    super();
    //const shadow = this.attachShadow({ mode: 'open' });
    this.addEventListener('click', e => {
      this.nextSlide();
    });
  }

  static get observedAttributes() {
    return ['autoslide', 'timer'];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if(attr == 'timer') this.timer = newValue;
  }

  //VARIABLES
  timer = 3000;

  //PROPERTIES
  get autoslide() {
    return this.hasAttribute('autoslide');
  }

  set autoslide(value) {
    if(value) this.hasAttribute('autoslide', '');
    else this.removeAttribute('autoslide');
  }

  get timer() {
    return this.timer;
  }

  set timer(value) {
    alert("sdfsdfsd");
    this.timer = value;
  }

  //METHODS
  nextSlide() {
    alert(this.timer);
  }
}

customElements.define('slide-box', SlideBox);
customElements.whenDefined('slide-box').then(() => {
  console.log('slide-box defined.');
});




customElements.define('slide-img', class extends Image {
  constructor(height = 50, width = 100) {
    super(height * 1, width * 1);
  }
}, {
  extends: 'img'
});

/*
customElements.whenDefined('slide-img').then(() => {
  console.log('slide-img defined.');
});
*/

/*
window.onload = function() {
  var slideshows = document.getElementsByClassName('slideshow');
  Array.prototype.forEach.call(slideshows, function(slideshow) {
    var slides = slideshow.children;
    setInterval(function() {
      slideshow.appendChild(slides[0]);
    }, timeToSlide);
  });
}
*/
