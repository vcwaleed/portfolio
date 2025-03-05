<template>
<section class="flex bg-sec_col p-4 md:p-8 flex-col-reverse md:flex-row items-center justify-center md:gap-56 font-display">
    <div ref="animationContainer" class="w-[250px] h-[250px] md:w-[400px] md:h-[400px]"></div>
    <div>
        <h1 class="text-3xl font-bold mb-4 text-pri_col">What I do</h1>
        <h2 class="text-xl mb-8 font-semibold text-gray-700">Software Engineer & Frontend Developer</h2>
        <div class="grid grid-cols-7 gap-y-5 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Logo" width="50">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Logo" width="50">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Logo" width="50">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Logo" width="50">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js Logo" width="50">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue Logo" width="50">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS Logo" width="50">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase Logo" width="50">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node Logo" width="50">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js Logo" width="45">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB Logo" width="50">
          <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="MySQL Logo"   width="50">
        </div>
        <div class="description text-left mt-12 max-w-3xl mx-auto text-gray-600 ">
            <p class="mb-2">⚡ Develop robust and scalable frontend applications.</p>
            <p class="mb-2">⚡ Build engaging user interfaces with modern JavaScript frameworks.</p>
            <p class="mb-2">⚡ Craft efficient backend solutions with Node.js and Firebase.</p>
            <p>⚡ I value clean, maintainable code and delivering exceptional user experiences.</p>
        </div>
    </div>
</section>
</template>

<script>
import {
    ref,
    onMounted
} from "vue";
import lottie from "lottie-web";
import animationData from "../assets/Skill.json";

export default {
    name: "SkillComponent",
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
            animationContainer
        };
    },
};
</script>
