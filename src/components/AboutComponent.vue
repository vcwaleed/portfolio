<template>
<section class="flex p-4 flex-col-reverse md:flex-row items-center justify-center bg-sec_col gap-4   mt-14">
    <div class="font-display md:w-1/2">
        <div class="text-text_dec_black text-5xl font-bold mb-4 ">
            <span>I'm {{ about.name }}</span>
        </div>
        <span class="text-pri_col text-3xl font-bold">{{
        about.designation
      }}</span>
        <span class="text-text_dec_black text-4xl font-bold pl-3">{{
        about.type
      }}</span>
        <div class="text-text_dec_black text-lg mt-4">
            <span>{{ about.description }}</span>
        </div>
        <div class="flex justify-center md:justify-normal">
        <BaseButton :onClick="openWhatsApp"> Contact Me →</BaseButton>
    </div>
    </div>
    <div ref="animationContainer" class="w-[250px] h-[250px] md:w-[400px] md:h-[400px]"></div>
</section>
</template>

<script>
import {
    ref,
    onMounted
} from "vue";
import {
    aboutData
} from "../setup";
import lottie from "lottie-web";
import animationData from "../assets/aboutme.json";
import BaseButton from "./BaseButton.vue";
export default {
    name: "AboutComponent",
    components: {
        BaseButton,
    },
    setup() {
        const about = ref(aboutData);
        const animationContainer = ref(null);
        const openWhatsApp = () => {
            const message = encodeURIComponent(
                "Hello Talha, I want to connect with you!"
            );
            window.open(
                `https://wa.me/${about.value.phoneNumber}?text=${message}`,
                "_blank"
            );
        };
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
            about,
            openWhatsApp,
            animationContainer
        };
    },
};
</script>
