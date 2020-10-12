
class CodeBlock extends HTMLElement {

}

customElements.define('code-block', CodeBlock);
customElements.whenDefined('code-block').then(() => {
  console.log('code-block defined.');
});

class CodeComment extends HTMLElement {

}

customElements.define('code-comment', CodeComment);
customElements.whenDefined('code-comment').then(() => {
  console.log('code-comment defined.');
});
