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
  articles[articles.length - 4].classList.add("simple-grid-article-l-2");
  articles[articles.length - 3].classList.add("simple-grid-article-l-3");
  articles[articles.length - 2].classList.add("simple-grid-article-l-4");
  articles[articles.length - 1].classList.add("simple-grid-article-l-5");
  articles[0].classList.add("simple-grid-article-l-1");
  var index = 0;
  var mIndex = articles.length - 2;
  var mPasIndex = 2;
  var mFutIndex = 2;
  var lIndex = articles.length - 4;
  var lPasIndex = 2;
  var lFutIndex = 2;

  setInterval(function() {
    articles[index].classList.remove("simple-grid-article-s");

    articles[mIndex].classList.remove("simple-grid-article-m-" + mPasIndex);
    mIndex++;
    if(mIndex == articles.length) mIndex = 0;
    mPasIndex++;
    if(mPasIndex > 3) mPasIndex = 1;

    articles[lIndex].classList.remove("simple-grid-article-l-" + lPasIndex);
    lIndex++;
    if(lIndex == articles.length) lIndex = 0;
    lPasIndex++;
    if(lPasIndex > 5) lPasIndex = 1;

    index++;
    if(index == articles.length) index = 0;

    articles[index].classList.add("simple-grid-article-s");

    articles[index].classList.add("simple-grid-article-m-" + mFutIndex);
    mFutIndex++;
    if(mFutIndex > 3) mFutIndex = 1;

    articles[index].classList.add("simple-grid-article-l-" + lFutIndex);
    lFutIndex++;
    if(lFutIndex > 5) lFutIndex = 1;
  }, slideshowTimer);
}
