import { LitElement, html } from 'lit-element';

class HelloApp extends LitElement {
	// function to check lint errors
	_hello(){
		console.log("hello");
	}
	render() {
		return html`
			
			<div>
				Welcome to lit element.
			</div>
		`;
	}
}

customElements.define('hello-app', HelloApp);
