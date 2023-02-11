class HamburgerMenu extends HTMLElement {
  constructor() {
    // Call the parent class constructor
    super();

    // Attach a shadow root to this custom element
    this.attachShadow({ mode: 'open' });

    // Set the initial HTML content of the shadow root
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          cursor: pointer;
          font-size: 24px;
        }
        .hide {
          display: none;
        }
      </style>
      <slot></slot>
    `;

    // Set an initial value for the toggled state
    this._toggled = false;
  }
  
  // When the custom element is added to the page
  connectedCallback() {
    // Add a click event listener to the shadow root
    this.shadowRoot.addEventListener('click', this._toggle.bind(this));
  }

  // The toggle function that changes the toggled state
  _toggle() {
    // Reverse the toggled state
    this._toggled = !this._toggled;

    // Dispatch a custom "toggle" event with bubbles set to true
    this.dispatchEvent(new CustomEvent('toggle', { bubbles: true }));

    // Show or hide the element based on the toggled state
    if (this._toggled) {
      this.shadowRoot.querySelector("slot").classList.add("hide");
    } else {
      this.shadowRoot.querySelector("slot").classList.remove("hide");
    }
  }
}

// Register the custom element with the browser
customElements.define('hamburger-menu', HamburgerMenu);

// Export the HamburgerMenu class for use in other parts of the app
export default HamburgerMenu;
