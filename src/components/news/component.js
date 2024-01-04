class NewsSidebarComponent extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <div class=" flex flex-col space-y-6">
        <!-- search -->
        <div class="md:max-w-md w-full">
          <div
            class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden"
          >
            <div
              class="grid place-items-center h-full w-12 text-gray-900 bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-gray-200"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>

        <hr class="h-0.5 w-full bg-gray-100" />

        <div class="w-full">
          <h1 class="text-primary font-medium text-xl">Recent Posts</h1>
          <div class="flex flex-col space-y-3 mt-5">
            <div class="w-full flex space-x-5">
              <div class="h-14 aspect-square bg-gray-300 rounded-md"></div>
              <div class="w-full flex flex-col text-gray-900">
                <h1 class="text-sm font-medium">
                  Unleash Your Adventure: Taking a Look at the City Surfer
                </h1>
                <h1 class="text-xs">june 21, 2023</h1>
              </div>
            </div>
            <div class="w-full flex space-x-5">
              <div class="h-14 aspect-square bg-gray-300 rounded-md"></div>
              <div class="w-full flex flex-col text-gray-900">
                <h1 class="text-sm font-medium">
                  Unleash Your Adventure: Taking a Look at the City Surfer
                </h1>
                <h1 class="text-xs">june 21, 2023</h1>
              </div>
            </div>
            <div class="w-full flex space-x-5">
              <div class="h-14 aspect-square bg-gray-300 rounded-md"></div>
              <div class="w-full flex flex-col text-gray-900">
                <h1 class="text-sm font-medium">
                  Unleash Your Adventure: Taking a Look at the City Surfer
                </h1>
                <h1 class="text-xs">june 21, 2023</h1>
              </div>
            </div>
            <div class="w-full flex space-x-5">
              <div class="h-14 aspect-square bg-gray-300 rounded-md"></div>
              <div class="w-full flex flex-col text-gray-900">
                <h1 class="text-sm font-medium">
                  Unleash Your Adventure: Taking a Look at the City Surfer
                </h1>
                <h1 class="text-xs">june 21, 2023</h1>
              </div>
            </div>
          </div>
        </div>

        <hr class="h-0.5 w-full bg-gray-100" />

        <div class="w-full">
          <h1 class="text-primary font-medium text-xl">Recent Comments</h1>
          <div class="flex flex-col space-y-3 mt-5 px-3 text-sm">
            <div class="w-full flex items-center space-x-5">
              <i class="fa-solid fa-message text-primary"></i>
              <h1>
                <span class="font-medium">Jane Doe</span> on
                <span class="font-medium">White Tee</span>
              </h1>
            </div>
            <div class="w-full flex items-center space-x-5">
              <i class="fa-solid fa-message text-primary"></i>
              <h1>
                <span class="font-medium">Jane Doe</span> on
                <span class="font-medium">White Tee</span>
              </h1>
            </div>
            <div class="w-full flex items-center space-x-5">
              <i class="fa-solid fa-message text-primary"></i>
              <h1>
                <span class="font-medium">Jane Doe</span> on
                <span class="font-medium">White Tee</span>
              </h1>
            </div>
            <div class="w-full flex items-center space-x-5">
              <i class="fa-solid fa-message text-primary"></i>
              <h1>
                <span class="font-medium">Jane Doe</span> on
                <span class="font-medium">White Tee</span>
              </h1>
            </div>
          </div>
        </div>

        <hr class="h-0.5 w-full bg-gray-100" />

        <div class="w-full">
          <h1 class="text-primary font-medium text-xl">Archives</h1>
          <div class="flex flex-col space-y-3 mt-5 px-3 text-sm">
            <div class="w-full flex items-center space-x-5">
              <i class="fa-solid fa-arrow-right-long text-primary"></i>
              <h1>September, 2023</h1>
            </div>
            <div class="w-full flex items-center space-x-5">
              <i class="fa-solid fa-arrow-right-long text-primary"></i>
              <h1>October, 2023</h1>
            </div>
            <div class="w-full flex items-center space-x-5">
              <i class="fa-solid fa-arrow-right-long text-primary"></i>
              <h1>November, 2023</h1>
            </div>
            <div class="w-full flex items-center space-x-5">
              <i class="fa-solid fa-arrow-right-long text-primary"></i>
              <h1>December, 2023</h1>
            </div>
          </div>
        </div>

        <hr class="h-0.5 w-full bg-gray-100" />

        <img src="../public/images/vector.png" alt="Vector Image" class="h-full w-full object-cover">
        </div>
        `;
    }
}

customElements.define("news-sidebar-component", NewsSidebarComponent)