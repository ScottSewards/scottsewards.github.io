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

class Slideshow extends HTMLElement {

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(value) {
    if(value) this.setAttribute('disabled', '');
    else this.removeAttribute('disabled');
  }

}

customElements.define('slide-show', Slideshow);

/*
class Tabs extends HTMLElement {

}

customElements.define('', Tabs);
*/
