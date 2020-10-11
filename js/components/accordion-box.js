class Accordion extends HTMLDetailsElement {

}

customElements.define('accord-box', Accordion, {
  extends: 'details'
});
customElements.whenDefined('accord-box').then(() => {
  console.log('accord-box defined.');
});

class AccordionSummary extends HTMLElement {
}

customElements.define('accord-sum', AccordionSummary);
customElements.whenDefined('accord-sum').then(() => {
  console.log('accord-sum defined.');
});
