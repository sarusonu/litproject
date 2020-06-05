/*const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
    display: block;
    font-family: sans-serif;
    text-align: center;
    }

    button {
    border: none;
    cursor: pointer;
    }

    ul {
    list-style: none;
    padding: 0;
    }
</style>
<h1>To do</h1>

<input type="text" placeholder="Add a new to do"></input>
<button>✅</button>

<ul id="todos"></ul>
`;

export default class TodoApp extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$todoList = this._shadowRoot.querySelector('ul');
        this.$input = this._shadowRoot.querySelector('input');

        this.$submitButton = this._shadowRoot.querySelector('button');
        this.$submitButton.addEventListener('click', this._addTodo.bind(this));
       // this._renderTodoList();
    }
    _renderTodoList() {
        this.$todoList.innerHTML = '';

        this._todos.forEach((todo, index) => {
            let $todoItem = document.createElement('div');
            $todoItem.innerHTML = todo.text; 
            this.$todoList.appendChild($todoItem);
        });
    }

    _addTodo() {
        if(this.$input.value.length > 0){
            this._todos.push({ text: this.$input.value, checked: false })
            this._renderTodoList();
            this.$input.value = '';
        }
    }
    set todos(value) {
        this._todos = value;
        this._renderTodoList();
    }

    get todos() {
        return this._todos;
    }
}

window.customElements.define('to-do-app', TodoApp); */


import { LitElement, html, css } from 'lit-element';
import './to-do-item.js';

class TodoApp extends LitElement {
  static get properties() {
    return {
      todos: { type: Array }
    }
  }

  constructor() {
    super();
    this.todos = [
      { text: 'Recap', checked: true },
      { text: 'Properties and attributes', checked: false },
      { text: 'Lifecycle and rerendering', checked: false },
      { text: 'Conclusion', checked: false }
    ];
  }

  firstUpdated() {
    this.$input = this.shadowRoot.querySelector('input');
  }

  _removeTodo(e) {
    this.todos = this.todos.filter((todo,index) => {
        return index !== e.detail;
    });
  }

  _toggleTodo(e) {
    this.todos = this.todos.map((todo, index) => {
        return index === e.detail ? {...todo, checked: !todo.checked} : todo;
    });
  }

  _addTodo(e) {
    e.preventDefault();
    if(this.$input.value.length > 0) {
        this.todos = [...this.todos, { text: this.$input.value, checked: false }];
        this.$input.value = '';
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: sans-serif;
        text-align: center;
      }
      button {
        border: none;
        cursor: pointer;
        background-color: Transparent;
      }
      ul {
        list-style: none;
        padding: 0;
      }
    `;
  }

  render() {
    return html`
      <h3>LitElement</h3>
      <br>
      <h1>To do</h1>
      <form id="todo-input">
          <input type="text" placeholder="Add a new to do"></input>
          <button @click=${this._addTodo}>✅</button>
      </form>
      <ul id="todos">
          ${this.todos.map((todo, index) => html`
                <to-do-item 
                    ?checked=${todo.checked}
                    .index=${index}
                    text=${todo.text}
                    @onRemove=${this._removeTodo}
                    @onToggle=${this._toggleTodo}>    
                </to-do-item>`
            )}
      </ul>
    `;
  }
}

window.customElements.define('to-do-app', TodoApp);