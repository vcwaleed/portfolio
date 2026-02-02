<template>
  <section
    id="top"
    class="mt-16 px-6 md:px-10 py-6 flex flex-col-reverse md:flex-row items-center justify-center gap-6"
  >
    <div class="font-display md:w-1/2">
      <h1 class="text-btn_col text-3xl md:text-5xl font-bold mb-3">
        I’m {{ about.name }}
      </h1>

      <p class="text-text_col text-2xl md:text-3xl font-bold leading-tight">
        {{ about.designation }}
        <span v-if="about.type" class="pl-2">{{ about.type }}</span>
      </p>

      <p class="text-text_col text-lg mt-4">
        {{ about.description }}
      </p>

      <div class="flex justify-center md:justify-start mt-6">
        <BaseButton>
          <a
            :href="whatsAppLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center"
          >
            Contact Me →
          </a>
        </BaseButton>
      </div>
    </div>

    <div
      ref="animationContainer"
      class="w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
      aria-hidden="true"
    />
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { aboutData } from "../setup";
import lottie from "lottie-web";
import animationData from "../assets/aboutme.json";
import BaseButton from "./BaseButton.vue";

const about = ref(aboutData);
const animationContainer = ref(null);

const whatsAppLink = computed(() => {
  const phone = String(about.value.phoneNumber || "").replace(/[^\d]/g, "");
  const message = encodeURIComponent(
    `Hello ${about.value.name}, I want to connect with you!`
  );
  return `https://wa.me/${phone}?text=${message}`;
});

let animationInstance = null;

onMounted(() => {
  if (!animationContainer.value) return;

  animationInstance = lottie.loadAnimation({
    container: animationContainer.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData,
  });
});

onBeforeUnmount(() => {
  animationInstance?.destroy();
  animationInstance = null;
});
</script>
