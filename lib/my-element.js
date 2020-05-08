function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <h1>Hello, ", "!</h1>\n      <button @click=", " part=\"button\">\n        Click Count: ", "\n      </button>\n      <slot></slot>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        display: block;\n        border: solid 1px gray;\n        padding: 16px;\n        max-width: 800px;\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { LitElement, html, css } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

export class MyElement extends LitElement {
  static get styles() {
    return css(_templateObject());
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: {
        type: String
      },

      /**
       * The number of times the button has been clicked.
       */
      count: {
        type: Number
      }
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  render() {
    return html(_templateObject2(), this.name, this._onClick, this.count);
  }

  _onClick() {
    this.count++;
  }

}
window.customElements.define('my-element', MyElement);