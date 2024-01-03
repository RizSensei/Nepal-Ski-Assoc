class MemberCardComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="shadow-2xl w-52 h-72 shadow-gray-200">
      <div class="w-full h-52 bg-gray-200">
        <img src = "../../public/images/President_image.png" class="h-full w-full object-cover"/>
      </div>
      <div class="w-full h-full mt-3 text-center text-primary">
        <h1 class="font-medium">Mr. Director Name</h1>
        <h1 class="text-sm">Director</h1>
      </div>
  </div>
    `;
  }
}
customElements.define("member-card-component", MemberCardComponent);