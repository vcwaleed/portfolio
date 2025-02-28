<template>
  <section class="flex p-4 flex-col-reverse md:flex-row items-center justify-center bg-sec_col border border-gray-200 gap-4 shadow-sm">
    <div class="font-mono md:w-1/2">
      <div class="text-white text-5xl font-bold mb-4">
        <span>I'm {{ about.name }}</span>
      </div>
      <span class="text-btn_col text-4xl font-bold">{{ about.designation }}</span>
      <span class="text-white text-4xl font-bold pl-3">{{ about.type }}</span>
      <div class="text-white font-semibold text-lg mt-4">
        <span>{{ about.description }}</span>
      </div>
      <button 
        @click="openWhatsApp"
        class="bg-btn_col p-3 hover:border-btn_col rounded text-white hover:bg-white hover:text-btn_col transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
      >
        Contact Me
      </button>
    </div>
    <div class="w-72 h-96 flex justify-center items-center overflow-hidden">
      <img :src="about.image" alt="person" class="object-contain w-full h-full" />
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { aboutData } from "../setup";

export default {
  name: "AboutComponent",
  setup() {
    const about = ref(aboutData);

    const openWhatsApp = () => {
      const message = encodeURIComponent("Hello Talha, I want to connect with you!");
      window.open(`https://wa.me/${about.value.phoneNumber}?text=${message}`, "_blank");
    };

    return { about, openWhatsApp };
  },
};
</script>
