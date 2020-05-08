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
          value: { type: Number }
        };
      }
    
      // Alternative syntax, if using TypeScript or Babel experimental decorators and field assignments are available
      // @property({type: Number})
      // value = 0;
    constructor() {
      super();
      this.value = 0;
    }
  
    render() {
      return html`
        <style>
          button,
          p {
            display: inline-block;
          }
        </style>
        <button @click="${() => this.value--}" aria-label="decrement">-</button>
        <p>${this.value}</p>
        <button @click="${() => this.value++}" aria-label="increment">+</button>
      `;
    }
  }
  
  customElements.define('x-counter', XCounter);