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
        </style>
        <slot></slot>
      `;
    }
  
    connectedCallback() {
      this.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('toggle'));
      });
    }
  }
  
  customElements.define('hamburger-menu', HamburgerMenu);
  
  export default HamburgerMenu;