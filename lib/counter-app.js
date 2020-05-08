function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        <style>\n          button,\n          p {\n            display: inline-block;\n          }\n        </style>\n        <button @click=\"", "\" aria-label=\"decrement\">-</button>\n        <p>", "</p>\n        <button @click=\"", "\" aria-label=\"increment\">+</button>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { LitElement, html } from 'lit-element';

class XCounter extends LitElement {
  /*We need to give lit-element some additional metadata to tell it what properties should trigger a re-render on the component. 
  To do this, we will add a static list of properties for lit-html to track.
  */

  /*
  The static property list allows lit-html to track which properties to trigger re-renders 
  as well as what properties to expose to consumers of our components.
  */
  static get properties() {
    return {
      value: {
        type: Number
      }
    };
  } // Alternative syntax, if using TypeScript or Babel experimental decorators and field assignments are available
  // @property({type: Number})
  // value = 0;


  constructor() {
    super();
    this.value = 0;
  }

  render() {
    return html(_templateObject(), () => this.value--, this.value, () => this.value++);
  }

}

customElements.define('x-counter', XCounter);