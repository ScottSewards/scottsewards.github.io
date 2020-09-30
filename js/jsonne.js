function CreateJSONTable(json, parent) {
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
  if(text != null) element.innerHTML = "placeholder text";
  return element;
}
