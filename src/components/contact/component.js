class ContactFormComponent extends HTMLElement {
     constructor() {
        super();
     }
     connectedCallback() {
        this.innerHTML = `
        <div
        class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-full max-w-lg bg-gradient-to-r from-primary to-secondary text-white md:rounded-xl"
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2
            class="text-center text-3xl font-bold leading-9 tracking-tight text-white"
          >
            Contact Us
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-white"
                >Email address</label
              >
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="name"
                  class="block text-sm font-medium leading-6 text-white"
                  >Name of Organization</label
                >
              </div>
              <div class="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="subject"
                  class="block text-sm font-medium leading-6 text-white"
                  >Subject</label
                >
              </div>
              <div class="mt-2">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="message"
                  class="block text-sm font-medium leading-6 text-white"
                  >Message</label
                >
              </div>
              <div class="mt-2">
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  rows="5"
                  class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send a Message
              </button>
            </div>
          </form>
        </div>
      </div>
        `
     }
    }

customElements.define("contact-form-component", ContactFormComponent);