class Tabs extends HTMLElement {

}

customElements.define('super-tabs', Tabs);
customElements.whenDefined('super-tabs').then(() => {
  console.log('super-tabs defined.');
});

/*
var tabs = document.getElementsByClassName('tabs');
Array.prototype.forEach.call(tabs, function(tab) {
  var slides = tab.children;
  setInterval(function() {
    slideshow.appendChild(slides[0]);
  }, 3000);
});
*/
