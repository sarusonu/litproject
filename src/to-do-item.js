/*const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
    display: block;
    font-family: sans-serif;
    }

    .completed {
    text-decoration: line-through;
    }

    button {
    border: none;
    cursor: pointer;
    }
</style>
<li class="item">
    <input type="checkbox">
    <label></label>
    <button>❌</button>
</li>
`;

export class TodoItem extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$item = this._shadowRoot.querySelector('.item');
        this.$removeButton = this._shadowRoot.querySelector('button');
        this.$text = this._shadowRoot.querySelector('label');
        this.$checkbox = this._shadowRoot.querySelector('input');

        this.$removeButton.addEventListener('click', (e) => {
            this.dispatchEvent(new CustomEvent('onRemove', { detail: this.index }));
        });

        this.$checkbox.addEventListener('click', (e) => {
            this.dispatchEvent(new CustomEvent('onToggle', { detail: this.index }));
        });
    }

    set index(val) {
        this.setAttribute('index', val);
    }
    
    get index() {
        return this._index;
    }
    get checked() {
        return this.hasAttribute('checked');
    }
    
    set checked(val) {
        if (val) {
            this.setAttribute('checked', '');
        } else {
            this.removeAttribute('checked');
        }
    }

    connectedCallback() {
        // We set a default attribute here; if our end user hasn't provided one,
        // our element will display a "placeholder" text instead.
        if(!this.hasAttribute('text')) {
            this.setAttribute('text', 'placeholder');
        }

        this._renderTodoItem();
    }

    _renderTodoItem() {
        if (this.hasAttribute('checked')) {
            this.$item.classList.add('completed');
            this.$checkbox.setAttribute('checked', '');
        } else {
            this.$item.classList.remove('completed');
            this.$checkbox.removeAttribute('checked');
        }

        this.$text.innerHTML = this._text;
    }

    static get observedAttributes() {
        return ['text', 'checked', 'index'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        switch(name){
            case 'text':
                this._text = newValue;
                break;
            case 'checked':
                this._checked = this.hasAttribute('checked');
                break;
            case 'index':
                this._index = parseInt(newValue);
                break;
        }
    }
}
window.customElements.define('to-do-item', TodoItem); */

import { LitElement, html, css } from 'lit-element';

class TodoItem extends LitElement {
  static get properties() {
    return {
      text: { 
        type: String,
        reflect: true
      },
      checked: { 
        type: Boolean, 
        reflect: true 
      },
      index: { 
        type: Number 
      }
    }
  }

  constructor() {
    super();
    this.text = '';
    this.checked = false;
  }

  _fire(eventType) {
    this.dispatchEvent(new CustomEvent(eventType, { detail: this.index }));   
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: sans-serif;
      }
      .completed {
        text-decoration: line-through;
      }
      button {
        cursor: pointer;
        border: none;
        background-color: Transparent;
      }
    `;
  }

  render() {
    return html`
        <li class="item">
            <input 
                type="checkbox" 
                .checked=${this.checked} 
                @change=${() => this._fire('onToggle')}>
            </input>
            <label class=${this.checked ? 'completed' : ''}>${this.text}</label>
            <button @click=${() => this._fire('onRemove')}>❌</button>
        </li>
    `;
  }
}

window.customElements.define('to-do-item', TodoItem);