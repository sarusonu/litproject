function _templateObject3() {
  var data = _taggedTemplateLiteral(["<my-element></my-element>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<my-element name=\"Test\"></my-element>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["<my-element></my-element>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import { MyElement } from '../my-element.js';
import { fixture, html } from '@open-wc/testing';
var assert = chai.assert;
suite('my-element', () => {
  test('is defined', () => {
    var el = document.createElement('my-element');
    assert.instanceOf(el, MyElement);
  });
  test('renders with default values', /*#__PURE__*/_asyncToGenerator(function* () {
    var el = yield fixture(html(_templateObject()));
    assert.shadowDom.equal(el, "\n      <h1>Hello, World!</h1>\n      <button part=\"button\">Click Count: 0</button>\n      <slot></slot>\n    ");
  }));
  test('renders with a set name', /*#__PURE__*/_asyncToGenerator(function* () {
    var el = yield fixture(html(_templateObject2()));
    assert.shadowDom.equal(el, "\n      <h1>Hello, Test!</h1>\n      <button part=\"button\">Click Count: 0</button>\n      <slot></slot>\n    ");
  }));
  test('handles a click', /*#__PURE__*/_asyncToGenerator(function* () {
    var el = yield fixture(html(_templateObject3()));
    var button = el.shadowRoot.querySelector('button');
    button.click();
    yield el.updateComplete;
    assert.shadowDom.equal(el, "\n      <h1>Hello, World!</h1>\n      <button part=\"button\">Click Count: 1</button>\n      <slot></slot>\n    ");
  }));
});