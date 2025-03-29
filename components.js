// This file contains all component data
// To add a new component, simply add a new object to this array

const componentLibrary = [
  {
    id: 'button-primary',
    name: 'Primary Button',
    tags: 'button primary cta action',
    preview: `
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </button>
    `,
    code: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>`
  },
  {
    id: 'button-secondary',
    name: 'Secondary Button',
    tags: 'button secondary outline',
    preview: `
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Click me
      </button>
    `,
    code: `<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Click me
</button>`
  },
  {
    id: 'input-basic',
    name: 'Basic Input',
    tags: 'input form field text',
    preview: `
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter text">
    `,
    code: `<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter text">`
  },
  {
    id: 'input-labeled',
    name: 'Labeled Input',
    tags: 'input form field text label',
    preview: `
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
      </div>
    `,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
    Username
  </label>
  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
</div>`
  },
  {
    id: 'card-basic',
    name: 'Basic Card',
    tags: 'card container box content',
    preview: `
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Card Title</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    `,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Card Title</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
</div>`
  },
  {
    id: 'alert-success',
    name: 'Success Alert',
    tags: 'alert notification message success',
    preview: `
      <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
        <p class="font-bold">Success</p>
        <p>Your changes have been saved successfully.</p>
      </div>
    `,
    code: `<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
  <p class="font-bold">Success</p>
  <p>Your changes have been saved successfully.</p>
</div>`
  },
  {
    id: 'alert-error',
    name: 'Error Alert',
    tags: 'alert notification message error danger',
    preview: `
      <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
        <p class="font-bold">Error</p>
        <p>Something went wrong. Please try again.</p>
      </div>
    `,
    code: `<div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
  <p class="font-bold">Error</p>
  <p>Something went wrong. Please try again.</p>
</div>`
  },
  {
    id: 'badge',
    name: 'Badge',
    tags: 'badge label tag status',
    preview: `
      <div class="flex space-x-2">
        <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Badge</span>
        <span class="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">New</span>
        <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Success</span>
      </div>
    `,
    code: `<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Badge</span>
<span class="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">New</span>
<span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Success</span>`
  },
  {
    id: 'navbar-simple',
    name: 'Simple Navbar',
    tags: 'navbar navigation header menu',
    preview: `
      <nav class="bg-gray-800 p-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">Logo</span>
          </div>
          <div class="block">
            <div class="flex items-center">
              <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    `,
    code: `<nav class="bg-gray-800 p-4">
  <div class="flex items-center justify-between">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Logo</span>
    </div>
    <div class="block">
      <div class="flex items-center">
        <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
        <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
        <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
      </div>
    </div>
  </div>
</nav>`
  },
  {
    id: 'form-login',
    name: 'Login Form',
    tags: 'form login authentication user',
    preview: `
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    `,
    code: `<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
      Email
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      Password
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
  </div>
  <div class="flex items-center justify-between">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      Sign In
    </button>
    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
      Forgot Password?
    </a>
  </div>
</form>`
  }
  
  // Add more components here by following the same structure
];
