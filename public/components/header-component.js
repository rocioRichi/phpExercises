class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background-color: #333;
          color: white;
          padding: 20px;
          text-align: center;
        }
        .logo {
          width: 50px;
        }
        .details {
          font-size: 1.2em;
          margin-top: 10px;
        }
      </style>
      <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/PHP-logo.svg" alt="PHP Logo" class="logo">
        <div class="details">
          <p>Ejercicios Básicos de PHP</p>
          <p>Tu nombre aquí: [Tu detalle personal]</p>
        </div>
      </header>
    `;
  }
}

customElements.define("header-component", HeaderComponent);
