<template>
<button v-if="showButton" @click="scrollToTop" class="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded shadow-lg transition-opacity duration-300 hover:bg-green-700">
    <ChevronUp width="20"/>
</button>
</template>

<script setup>
import { ChevronUp } from 'lucide-vue-next';
import {
    ref,
    onMounted,
    onUnmounted
} from "vue";
const showButton = ref(false);

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const checkScroll = () => {
    showButton.value = window.scrollY > 300;
};
onMounted(() => {
    window.addEventListener("scroll", checkScroll);
});
onUnmounted(() => {
    window.removeEventListener("scroll", checkScroll);
});
</script>
