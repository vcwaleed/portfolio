<template>
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-green-700"
    >
    <img src="../assets/drag-scroll.svg" width="25"/>
    </button>
  </template>
  
  <script>
  import { Mouse } from 'lucide-vue-next';
  export default {
    data() {
      return {
        showButton: false,
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      checkScroll() {
        this.showButton = window.scrollY > 300;
      },
    },
    mounted() {
      window.addEventListener("scroll", this.checkScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.checkScroll);
    },
  };
  </script>
  