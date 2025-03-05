<template>
  <nav class="bg-pri_col fixed top-0 left-0 w-full z-50 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-around lg:gap-62 mx-auto p-3"
    >
      <span class="text-white md:pl-4   font-bold text-xl md:text-3xl font-display">
        {{ about.nickname }}
      </span>
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
        aria-controls="navbar-default"
        :aria-expanded="isMenuOpen"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        :class="[
          isMenuOpen ? 'block' : 'hidden',
          'w-full',
          'md:block',
          'md:w-auto',
        ]"
        id="navbar-default"
      >
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 text-white rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0"
        >
          <li v-for="(link, index) in navLinks" :key="index">
            <a
              href="#"
              @click.prevent="scrollToSection(link.href)"
              class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:border-0 md:hover:bg-hov_col md:p-2 font-display"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import { aboutData } from "../setup";

export default {
  name: "NavbarComponent",
  setup() {
    const about = ref(aboutData);
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const navLinks = [
      { name: "Skills", href: "#skills" },
      { name: "Work Experiences", href: "#work" },
      { name: "Open Source", href: "#opensource" },
      { name: "Contact Me", href: "#contact" },
    ];

    const scrollToSection = (id) => {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        isMenuOpen.value = false; // Close menu after clicking a link
      }
    };

    return {
      isMenuOpen,
      toggleMenu,
      navLinks,
      about,
      scrollToSection,
    };
  },
};
</script>
