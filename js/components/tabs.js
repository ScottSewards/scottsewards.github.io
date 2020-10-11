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
