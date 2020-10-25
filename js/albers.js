//https://developers.google.com/web/fundamentals/web-components/shadowdom
function createQR(data) {
  var ethereumWallet = "0xA14Ae9BC94005A93934a027024EB7421215853Af";
  var element = document.createElement('img');
  element.src = "<img src='https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=" + ethereumWallet + "&choe=UTF-8&chld=L|0' alt='Ethereum Wallet Address QR Code'/>";
  return element;
}

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
