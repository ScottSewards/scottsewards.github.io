
class ColumnBox extends HTMLElement {

}

customElements.define('column-box', ColumnBox);
customElements.whenDefined('column-box').then(() => {
  console.log('column-box defined.');
});
