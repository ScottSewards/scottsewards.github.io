function tableFromJSON(file, parent, showDelete) {
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

function makeElement(type, text) {
  var element = document.createElement(type);
  if(text != null) element.innerHTML = "ttt";
  return element;
}

//if(showDelete) keys.push("delete");

/*
var keys = Object.keys(file);
console.log(keys);

keys.forEach((item, index) => {
  console.log(item);
});

for(var i in file.item) {
  console.log("Key: " + i + " | Value: " + file.item[key]);
}
*/
