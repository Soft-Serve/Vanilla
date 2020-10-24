<template>
  <nav class="bg-white shadow-lg mb-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">

          </div>
          <div class="hidden sm:ml-6 sm:flex">
            <a
              href="#"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-red-500
          text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-red-700 transition duration-150 ease-in-out"
            >
              Menu
            </a>
            <a
              href="#"
              class="ml-8 inline-flex items-center px-1 pt-1 border-b-2
          border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700
          hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
            >
              Cart
            </a>
            <a
              href="#"
              class="ml-8 inline-flex items-center px-1 pt-1 border-b-2
          border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300
          focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
            >
              Help
            </a>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <button
            class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none
        focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
            aria-label="Notifications"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0
            10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <div class="ml-3 relative">
            <div @click="toggleNavBar">
              <button
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500
              hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  v-if="!isOpen"
                  class="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  v-else
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
              v-if="isOpen"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
            >
              <div class="py-1 rounded-md bg-white shadow-xs">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100
              focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >Your Profile</a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100
              focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >Settings</a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100
              focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                >Sign out</a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="-mr-2 flex items-center sm:hidden"
          @click="toggleNavBar"
        >
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500
        hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <svg
              v-if="!isOpen"
              class="block h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <transition
      name="slide"
    >
      <div
        v-if="isOpen"
        class="sm:hidden"
      >
        <div class="pt-2 pb-3">
          <a
            href="#"
            class="block pl-3 pr-4 py-2 border-l-4 border-red-500 text-base font-medium text-red-700
      bg-red-50 focus:outline-none focus:text-red-800 focus:bg-red-100 focus:border-red-700 transition
      duration-150 ease-in-out"
          >Menu</a>
          <router-link
            to="/about"
            class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600
      hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50
      focus:border-gray-300 transition duration-150 ease-in-out"
          >
            Cart
          </router-link>
          <a
            href="#"
            class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600
        hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800   focus:bg-gray-50
        focus:border-gray-300 transition duration-150 ease-in-out"
          >
            Help
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',

  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleNavBar() {
      this.isOpen = !this.isOpen;
    },
  },
});

</script>

<style scoped>
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
