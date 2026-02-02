<template>
  <nav class="bg-nav_bg fixed top-0 left-0 w-full z-50 shadow-md dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between w-full mx-auto p-3 md:px-10">
      <a
        href="#"
        class="text-white md:pl-4 font-bold text-xl md:text-3xl font-display"
        @click.prevent="scrollToSection('#top')"
      >
        {{ about.nickname }}
      </a>

      <button
        type="button"
        class="inline-flex items-center w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-hov_col focus:outline-none focus:ring-2 focus:ring-white"
        :aria-expanded="String(isMenuOpen)"
        aria-controls="navbar-default"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
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
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black/30 md:hidden"
        @click="closeMenu"
      />

      <div
        id="navbar-default"
        ref="menuRef"
        :class="[
          'w-full md:block md:w-auto',
          isMenuOpen ? 'block' : 'hidden',
          'md:static md:bg-transparent',
          // on mobile keep it above overlay
          'relative md:relative z-10',
        ]"
      >
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 text-white rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0"
        >
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="block py-2 px-3 rounded-sm hover:bg-hov_col md:hover:bg-hov_col md:p-2 font-display"
              :class="activeHash === link.href ? 'bg-hov_col' : ''"
              @click="handleNavClick(link.href)"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { aboutData } from "../setup";

const about = ref(aboutData);

const isMenuOpen = ref(false);
const activeHash = ref(window.location.hash || "");
const menuRef = ref(null);

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Work Experiences", href: "#work" },
  { name: "Open Source", href: "#opensource" },
  { name: "Contact Me", href: "#contact" },
];

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function scrollToSection(hash) {
  const section = document.querySelector(hash);
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

function handleNavClick(hash) {
  scrollToSection(hash);
  activeHash.value = hash;
  closeMenu();
}

function onKeydown(e) {
  if (e.key === "Escape") closeMenu();
}

function onHashChange() {
  activeHash.value = window.location.hash || "";
  closeMenu();
}

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
  window.addEventListener("hashchange", onHashChange);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  window.removeEventListener("hashchange", onHashChange);
});
</script>
