class HeaderComponent extends HTMLElement{
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <header
          class="sticky top-0 w-full h-auto py-2 text-white z-[100] bg-gradient-to-b from-primary to-transparent opacity-90"
        >
          <div
            class="container flex items-center justify-between w-full px-5 pb-2 mx-auto border border-t-0 border-b-white border-x-0"
          >
            <div class="flex items-center justify-between w-full space-x-5">
              <img
                src="../public/images/logo.png"
                alt="NSA_logo"
                class="w-24 h-16"
              />
              <nav class="hidden space-x-10 text-xs lg:flex">
                <h1><a href="./index.html">HOME</a></h1>
                <h1><a href="./about_us.html">ORGANIZATION</a></h1>
                <h1><a href="">NEWS</a></h1>
                <h1><a href="./gallery.html">GALLERY</a></h1>
                <h1><a href="./contact.html">CONTACT US</a></h1>
              </nav>
              <div>
                <img
                  src="../public/images/nepal flag.png"
                  alt=""
                  class="w-16 h-16"
                />
              </div>
            </div>
            <button id="nav-hamburger" class="block lg:hidden">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </header>
      `
    }
  }
  
class FooterComponent extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
    <footer class="relative h-[90vh] md:h-[50vh] w-full">
    <section class="w-full">
      <div
        class="grid grid-cols-1 text-xs text-center border divide-y md:grid-cols-3 md:divide-x border-y-gray-200"
      >
        <div class="py-2">
          <h1>National Sports Council, Tripureshwor, Kathmandu</h1>
          <h1 class="font-bold">Mailing Address:</h1>
        </div>
        <div class="py-2">
          <h1>nepalski@nocnepal.org. npski_nepal@yahoo.com</h1>
          <h1 class="font-bold">Email</h1>
        </div>
        <div class="py-2">
          <h1>977-1-4258514, 977-1-4278633</h1>
          <h1 class="font-bold">Phone</h1>
        </div>
      </div>
    </section>
      <img
        src="../public/images/fade_background.png"
        alt=""
        class="object-cover w-full h-full"
      />
      <div class="absolute w-full -translate-x-1/2 -translate-y-1 top-1/2 left-1/2">
        <div class="container flex justify-between px-10 mx-auto">
          <div class="flex flex-col space-y-5">
            <img
              src="../public/images/logo.png"
              alt="NSA Logo"
              class="h-20 w-28 md:h-28 md:w-36"
            />
            <nav class="text-xs font-semibold md:space-x-5 md:flex text-primary">
              <h1>HOME</h1>
              <h1>ORGANIZATION</h1>
              <h1>NEWS</h1>
              <h1>GALLERY</h1>
              <h1>CONTACT US</h1>
            </nav>
          </div>
          <div class="flex flex-col space-y-5">
            <h1 class="text-sm font-semibold text-primary">ASSOCIATED WITH:</h1>
            <div class="space-y-2 md:flex md:space-x-10">
              <img
                src="../public/images/nepal_olympic_committee_logo.png"
                alt=""
                class="w-28 h-28 md:w-24 md:h-24"
              />
              <img
                src="../public/images/FIS_logo.png"
                alt=""
                class="w-28 h-28 md:w-24 md:h-24"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between h-12 px-12">
        <div class="flex py-4 space-x-5 text-primary">
          <a href="">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-pinterest"></i>
          </a>
        </div>
        <div class="flex space-x-2">
          <div class="overflow-hidden">
            <img
              src="../public/images/vector.png"
              alt=""
              class="transform h-36 -scale-x-100"
            />
          </div>
          <div class="flex py-4 space-x-5 text-xs">
            <h1>Terms & Conditions</h1>
            <h1>Privacy Policy</h1>
            <h1>Cookie Policy</h1>
          </div>
        </div>
      </div>
    </footer>
      `;
    }
  }
  
class HeroBackgroundComponent extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="h-[400px] overflow-y-hidden">
            <img
              src="../public/images/winter-ski-panorama-alps.jpg"
              alt="SKI Background"
              class="object-cover w-full h-full"
            />
            <section
              class="absolute z-10 top-[100px] right-5 md:right-[5.5rem] max-w-4xl"
            >
              <div
                class="flex flex-col font-bold text-2xl md:text-4xl lg:text-5xl xl:text-[70px] text-right leading-none"
              >
                <img
                  src="../public/images/vector.png"
                  alt="Vector image"
                  class="w-full h-full opacity-40"
                />
              </div>
            </section>
          </div>
      `;
    }
  }

class NewsletterComponent extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-20 lg:py-24 mt-12">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="w-full mx-auto flex flex-col items-center justify-center max-w-2xl gap-y-16 lg:max-w-none">
            <div class="max-w-xl lg:max-w-lg">
              <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">Subscribe to our newsletter.</h2>
              <p class="mt-4 text-base leading-6 text-gray-300">Sign up to be notified of the latest ski releases, news and exclusive promotions delivered right to your inbox.</p>
              <div class="mt-6 flex max-w-md gap-x-4">
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email">
                <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-secondary opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
    </div>
      `;
    }
  }
  
  customElements.define("footer-component", FooterComponent);
  
  customElements.define("header-component", HeaderComponent);
  
  customElements.define("hero-background-component", HeroBackgroundComponent);

  customElements.define("newsletter-component", NewsletterComponent);
  