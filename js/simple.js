const $ = document.querySelector.bind(document);

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
