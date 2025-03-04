<template>
<section class="flex bg-sec_col p-4 md:p-8 flex-col md:flex-row items-center justify-center gap-x-64 font-display">
    <div class="w-full max-w-lg">
        <span class="text-5xl font-semibold text-text_heading">Proficiency</span>
        <div class="w-full mt-6">
            <div class="mb-3 text-lg font-semibold dark:text-white">Js Developer</div>
            <div class="w-full bg-gray-300 rounded-full h-6 mb-6 dark:bg-gray-700 shadow-md">
                <div class="bg-pri_col h-6 rounded-full dark:bg-gray-300 shadow-lg " style="width: 95%"></div>
            </div>
            <div class="mb-3 text-lg font-semibold dark:text-white">Frontend/Design</div>
            <div class="w-full bg-gray-300 rounded-full h-6 mb-6 dark:bg-gray-700 shadow-md">
                <div class="bg-pri_col h-6 rounded-full dark:bg-gray-300 shadow-lg " style="width: 90%"></div>
            </div>
            <div class="mb-3 text-lg font-semibold dark:text-white">Backend Development</div>
            <div class="w-full bg-gray-300 rounded-full h-6 mb-6 dark:bg-gray-700 shadow-md">
                <div class="bg-pri_col h-6 rounded-full dark:bg-gray-300 shadow-lg " style="width: 80%"></div>
            </div>
        </div>
    </div>
    <div ref="animationContainer" class="w-[300px] h-[300px] md:w-[450px] md:h-[450px]"></div>
</section>
</template>

<script>
import {
    ref,
    onMounted
} from "vue";
import lottie from "lottie-web";
import animationData from "../assets/Proficiency.json";

export default {
    name: "ExperienceComponent",
    setup() {
        const animationContainer = ref(null);

        onMounted(() => {
            lottie.loadAnimation({
                container: animationContainer.value,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData,
            });

        });

        return {
            animationContainer,

        };
    },
};
</script>
