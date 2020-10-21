
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



/*
$(document).ready(function() {
  //$("a[href*='" + location.pathname.substring(8, -1) + "']").addClass("active"); //SET RIBBON

  $("[name='show-password']").click(function() {
    if($(this).val() == "Show") $(this).val("Hide").prev().attr("type", "text");
    else $(this).val("Show").prev().attr("type", "password");
  });

  $(".accordion").each(function(index) {
    var accordion = $(this);
    $(this).find("> p").each(function(index) {
      $(this).addClass("accordion-" + index);
    });

    $(this).find("> div").each(function(index) {
      $(this).addClass("accordion-" + index);
    });

    $(accordion).find("> p").click(function() {
      var listItemClasses = $(this).attr('class');
      $(accordion).find('> p, > div').removeClass('active').each(function() {
        if($(this).hasClass(listItemClasses)) $(this).addClass('active');
      });
    });
  });

  $('.tabs').each(function(index) {
    var tabs = $(this);
    $(this).find('> ol, > ul').addClass('tab-options').find('> li').each(function(index) {
      $(this).addClass('tab-' + index);
    });

    $(tabs).find('> div').each(function(index) {
      $(this).addClass('tab-' + index);
    });

    $(tabs).find('> ol > li, > ul > li').click(function() {
      var listItemClasses = $(this).attr('class');
      $(tabs).find('> ol > li, > ul > li, > div').removeClass('active').each(function() {
        if($(this).hasClass(listItemClasses)) $(this).addClass('active');
      });
    });
  });
});
*/





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
