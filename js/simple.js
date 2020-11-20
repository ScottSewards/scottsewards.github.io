const $ = document.querySelector.bind(document);
const $$ = (css, parent = document) => Array.from(parent.querySelectorAll(css));

var themeColourHue = getCookie('themeColourHue');
if(themeColourHue !== null) document.documentElement.style.setProperty('--col-theme-hue', themeColourHue);

function getCookie(name) {
  var cookies = document.cookie.split('; ');
  for(var i = 0; i < cookies.length; i++) {
    var split = cookies[i].split('=');
    var key = split[0];
    var value = split[1];
    if(name === key) return value;
  }
  return null;
}

function setCookie(name, value, log) {
  document.cookie = name + '=' + value;
  if(log) console.log(name + ' cookie was set.');
}


window.onload = function() {
  var slideshowTimer = 3000;
  var articles = $$(".simple-grid-article");
  articles[0].classList.add("simple-grid-article-s");
  articles[articles.length - 2].classList.add("simple-grid-article-m-2");
  articles[articles.length - 1].classList.add("simple-grid-article-m-3");
  articles[0].classList.add("simple-grid-article-m-1");

  var index = 0;
  var jIndex = articles.length - 2;
  var cPasIndex = 2;
  var cFutIndex = 2;

  setInterval(function() {
    articles[index].classList.remove("simple-grid-article-s");
    articles[jIndex].classList.remove("simple-grid-article-m-" + cPasIndex);
    jIndex++;
    if(jIndex == articles.length) jIndex = 0;
    cPasIndex++;
    if(cPasIndex > 3) cPasIndex = 1;
    index++;
    if(index == articles.length) index = 0;
    articles[index].classList.add("simple-grid-article-s");
    articles[index].classList.add("simple-grid-article-m-" + cFutIndex);
    cFutIndex++;
    if(cFutIndex > 3) cFutIndex = 1;
  }, slideshowTimer);
}
