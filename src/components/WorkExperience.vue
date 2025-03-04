<template>
  <section class="flex flex-col   p-6 sm:p-12 lg:px-28 min-h-screen font-display">
    <h2 class="text-3xl sm:text-4xl font-bold mb-6  sm:text-left  md:text-center text-text_heading">
      Work Experiences
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-5xl mx-auto ">
      <div
        v-for="(job, index) in experiences"
        :key="index"
        class="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col"
      >
        <div class="pt-14 pb-6 px-6 text-center flex flex-col flex-grow">
          <h3 class="text-xl font-bold text-gray-800">{{ job.companyname }}</h3>
          <p class="text-pri_col font-medium">{{ job.designation }}</p>
          <p class="text-gray-500 mt-2">{{ job.working_duration }}</p>

          <ul class="text-left text-gray-700 mt-4 space-y-2 flex-grow">
            <li v-for="(point, i) in job.points" :key="i" class="flex items-start">
              <span class="text-indigo-500 mr-2">✔</span>
              <span class="break-words">{{ point }}</span>
            </li>
          </ul>

          <div class="mt-4 flex flex-wrap justify-center gap-2">
            <span
              v-for="(skill, i) in job.skill_set.split(',')"
              :key="i"
              class="px-3 py-1  text-gray-600 bg-gray-100  hover:underline hover:cursor-copy text-sm font-medium "
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
