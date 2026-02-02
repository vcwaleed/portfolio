<template>
  <section class="flex flex-col p-6 sm:p-12 px-10 font-display">
    <h2 class="text-3xl sm:text-4xl font-bold mb-6  sm:text-left  md:text-center text-btn_col">
      Work Experiences
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-5xl mx-auto ">
      <div
        v-for="(job, index) in experiences"
        :key="index"
        class="bg-sec_col rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col"
      >
        <div class="pt-14 pb-6 px-6 text-center flex flex-col flex-grow">
          <h3 class="text-xl font-bold text-text_col">{{ job.companyname }}</h3>
          <p class="text-text_col font-medium">{{ job.designation }}</p>
          <p class="text-text_col mt-2">{{ job.working_duration }}</p>

          <ul class="text-left text-text_col mt-4 space-y-2 flex-grow">
            <li v-for="(point, i) in job.points" :key="i" class="flex items-start">
              <span class="text-btn_col mr-2">✔</span>
              <span class="break-words">{{ point }}</span>
            </li>
          </ul>

          <div class="mt-4 flex flex-wrap justify-center gap-2">
            <span
              v-for="(skill, i) in job.skill_set.split(',')"
              :key="i"
              class="px-3 py-1  text-text_col bg-hov_col  hover:underline hover:cursor-copy text-sm font-medium "
            >
              {{ skill.trim() }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { experience } from "../setup";

export default {
  name: "WorkExperience",
  setup() {
    const experiences = ref(experience);
    return { experiences };
  },
};
</script>
