<template>
  <nav class="fixed top-0 w-full z-50 px-6 py-4 flex justify-center">
    <div class="max-w-6xl w-full flex items-center justify-between glass-panel px-6 py-3 rounded-xl">
      <button
        type="button"
        class="flex items-center gap-2 group cursor-pointer"
        @click="scrollToSection('home')"
      >
        <div class="size-8 bg-primary rounded flex items-center justify-center text-white">
          <span class="material-symbols-outlined text-xl">terminal</span>
        </div>
        <span class="font-bold text-lg tracking-tight">TW.</span>
      </button>

      <div class="hidden md:flex items-center gap-8 cursor-pointer">
        <button class="text-sm font-medium hover:text-primary transition-colors cursor-pointer" @click="scrollToSection('home')">
          Home
        </button>
        <button class="text-sm font-medium hover:text-primary transition-colors cursor-pointer" @click="scrollToSection('projects')">
          Projects
        </button>
        <button class="text-sm font-medium hover:text-primary transition-colors cursor-pointer" @click="scrollToSection('stack')">
          Stack
        </button>
        <button class="text-sm font-medium hover:text-primary transition-colors cursor-pointer" @click="scrollToSection('contact')">
          Contact
        </button>
      </div>

      <div class="flex items-center gap-4">
        <button
          class="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all transform active:scale-95 cursor-pointer"
          @click="scrollToSection('contact')"
        >
          Hire Me
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
const NAV_HEIGHT = 96;

function scrollToSection(id) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top: y, behavior: "smooth" });
}
</script>
