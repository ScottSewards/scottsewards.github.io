
class CodeBox extends HTMLElement {

}

customElements.define('code-box', CodeBox);
customElements.whenDefined('code-box').then(() => {
  console.log('code-block defined.');
});

class CodeComment extends HTMLElement {

}

customElements.define('code-comment', CodeComment);
customElements.whenDefined('code-comment').then(() => {
  console.log('code-comment defined.');
});
