class NavigationButtons extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["prev", "next", "index-url"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const prev = this.getAttribute("prev") || "#";
    const next = this.getAttribute("next") || "#";
    const indexUrl = this.getAttribute("index-url") || "#";

    this.shadowRoot.innerHTML = `
      <style>
        .nav-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }
        button, a {
          padding: 10px 20px;
          background-color: #007BFF;
          color: white;
          border: none;
          text-decoration: none;
          font-size: 16px;
          cursor: pointer;
          text-align: center;
        }
        button:hover, a:hover {
          background-color: #0056b3;
        }
        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      </style>
      <div class="nav-buttons">
        <button ?disabled="${
          prev === "#"
        }" onclick="location.href='${prev}'">Anterior</button>
        <a href="${indexUrl}">Índice</a>
        <button ?disabled="${
          next === "#"
        }" onclick="location.href='${next}'">Siguiente</button>
      </div>
    `;
  }
}

customElements.define("navigation-buttons", NavigationButtons);
