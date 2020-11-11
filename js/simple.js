//https://developers.google.com/web/fundamentals/web-components/shadowdom
//https://dev.to/mrahmadawais/use-instead-of-document-queryselector-all-in-javascript-without-jquery-3ef1
const $ = document.querySelector.bind(document);
//const $$ = document.querySelectorAll.bind(document);


//GET THEME COLOUR COOKIE
var themeColourHue = getCookie('themeColourHue');
//APPLY THEME COLOUR BEFORE WHILE LOADING
if(themeColourHue !== null) document.documentElement.style.setProperty('--col-theme-hue', themeColourHue);

window.onload = function() {

}






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

function setRibbon() {
  try {
    var pathname = window.location.pathname.substring(1).split('/');
    var link = pathname[window.location.hostname === 'localhost' ? 1 : 0].split('.');
    $('#' + link[0] + '-link').classList.add('active');
  } catch (e) {
    console.log(e);
  }
}







/*
function createTable(data, parent) {
  var cols = [];
  for(var i = 0; i < data.length; i++)
    for(var key in data[i])
      if(cols.indexOf(key) === -1) cols.push(key);

  var table = document.getElementById(parent);
  var thead = document.createElement('thead');
  table.appendChild(thead);
  var tr = thead.insertRow(-1);
  for(var i = 0; i < cols.length; i++) {
    var th = document.createElement('th');
    th.innerHTML = cols[i];
    tr.appendChild(th);
  }

  var tbody = document.createElement('tbody');
  table.appendChild(tbody);
  for(var i = 0; i < data.length; i++) {
    tr = tbody.insertRow(-1);
    for(var j = 0; j < cols.length; j++) {
      var td = tr.insertCell(-1);
      td.innerHTML = data[i][cols[j]];
    }
  }
}

//https://web.dev/file-system-access/
//https://developer.mozilla.org/en-US/docs/Web/API/FileSystem
/*
window.onload = () => {
  //window.requestFileSystem();
};

//https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard
//https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
function copyToClipboard(identifier) {
  //navigator.clipboard.writeText(document.getElementById(identifier).textContent).then(e => alert(e));
}

function pasteFromClipboard(element) {
  //navigator.clipboard.readText().then(e => alert(e));
}
*/
