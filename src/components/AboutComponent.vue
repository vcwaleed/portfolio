<template>
  <section class="flex p-4 flex-col-reverse md:flex-row items-center justify-center bg-sec_col gap-4 ">
    <div class="font-display md:w-1/2">
      <div class="text-text_dec_black text-5xl font-bold mb-4">
        <span>I'm {{ about.name }}</span>
      </div>
      <span class="text-btn_col text-4xl font-bold">{{ about.designation }}</span>
      <span class="text-text_dec_black text-4xl font-bold pl-3">{{ about.type }}</span>
      <div class="text-text_dec_black  text-lg mt-4">
        <span>{{ about.description }}</span>
      </div>
      <button 
        @click="openWhatsApp"
        class="bg-pri_col p-3  mt-2 rounded text-text_col hover:border-blue-950 hover:bg-btn_col hover:text-white transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
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
