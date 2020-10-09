function CreateJSONTable(json, parent) {
  console.table(json);

  var cols = [];
  for(var i = 0; i < json.length; i++)
    for(var key in json[i])
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
  for(var i = 0; i < json.length; i++) {
    tr = tbody.insertRow(-1);
    for(var j = 0; j < cols.length; j++) {
      var td = tr.insertCell(-1);
      td.innerHTML = json[i][cols[j]];
    }
  }
}


/*
function makeElement(type, text) {
  var element = document.createElement(type);
  if(text != null) element.innerHTML = "placeholder text";
  return element;

  //CREATE TABLE HEAD
  var thead = makeElement("thead");
  parent.appendChild(thead);

  //CREATE TABLE BODY
  var tbody = makeElement("tbody");
  parent.appendChild(tbody);

  //CREATE TABLE FOOT
  var tfoot = makeElement("tfoot");
  parent.appendChild(tfoot);
}
*/
