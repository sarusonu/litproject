function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\n\t\t\t<div>\n\t\t\t\tWelcome to lit element.\n\t\t\t</div>\n\t\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { LitElement, html } from 'lit-element';

class HelloApp extends LitElement {
  // function to check lint errors
  _hello() {
    console.log("hello");
  }

  render() {
    return html(_templateObject());
  }

}

customElements.define('hello-app', HelloApp);