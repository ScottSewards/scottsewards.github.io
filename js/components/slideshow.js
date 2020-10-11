class SlideShow extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
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

customElements.define('slide-show', SlideShow);
customElements.whenDefined('slide-show').then(() => {
  console.log('slide-show defined.');
});

class SlideImg extends HTMLElement {

}

customElements.define('slide-img', SlideImg);
customElements.whenDefined('slide-img').then(() => {
  console.log('slide-img defined.');
});

/*
var timeToSlide = 3000;

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
