
import {LitElement, html, css} from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MovieApp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
      table {
        padding: 12px;
      }
    
      td {
        padding-bottom: 12px;
        padding-right: 12px;    
      }
      
      td.header-content{
        justify-content:left;
        width:50%;
        cursor:default;
      }
      hr {
        margin-left: 12px;
        margin-right: 12px;
        border-top: 1px solid #d9d9d9;
      }
    `;
  }

  static get properties() {
    return {
      movieData: {type: Object},
    };
  }

  constructor() {
    super();
    this.movieData = {};
  }

  async _getmovieData() {
    try {
      // uncomment below line 65 if you want to call external api
      //const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);

      //coment line no 68 if you are not running backend project on local machine
      const response = await fetch(`http://localhost:8083/ratingsdata/movies/4`);
      if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.clone().json();
        this.movieData = json;
      } else {
        alert("HTTP-Error: " + response.status);
      }
      
    } catch (error) {
      console.log("error occured");
    }
    
  }
  async  postData(url = 'http://example.com/movies.json', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    this.movieData= response.json(); // parses JSON response into native JavaScript objects
  }
  connectedCallback() {
    super.connectedCallback();
    this._getmovieData();
  }

  render() {
    
    return html`
      <h1>Data from external api</h1>
      <slot></slot>
      <table>
      <tbody>
      <tr>
      <td>movieId</td>
      <td>${this.movieData.movieId}</td>
      </tr>
      <tr>
      <td>rating</td>
      <td>${this.movieData.rating}</td>
      </tr>
      <!--<tr>
      <td>title</td>
      <td>${this.movieData.title}</td>
      </tr><tr>
      <td>completed</td>
      <td>${this.movieData.completed}</td>
      </tr>-->
      </tbody>
      </table>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('movie-app', MovieApp);
