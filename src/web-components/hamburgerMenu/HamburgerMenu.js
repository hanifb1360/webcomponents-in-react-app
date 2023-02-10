class HamburgerMenu extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
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
    this._toggled = false;
  }
  
  connectedCallback() {
    this.shadowRoot.addEventListener('click', this._toggle.bind(this));
  }

  _toggle() {
    this._toggled = !this._toggled;
    this.dispatchEvent(new CustomEvent('toggle', { bubbles: true }));
    if (this._toggled) {
      this.shadowRoot.querySelector("slot").classList.add("hide");
    } else {
      this.shadowRoot.querySelector("slot").classList.remove("hide");
    }
  }
}

customElements.define('hamburger-menu', HamburgerMenu);

export default HamburgerMenu;
