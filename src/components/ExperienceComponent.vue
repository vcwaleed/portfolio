<template>
  <section class="max-w-6xl mx-auto px-6 py-16 w-full font-display">
    <div class="flex items-center justify-between mb-14">
      <div class="flex items-center gap-4">
        <span class="material-symbols-outlined text-primary text-3xl">
          work_history
        </span>
        <h2 class="text-3xl font-bold text-white tracking-tight">
          Professional Experience
        </h2>
      </div>
      <div class="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
        2.5+ Years Experience
      </div>
    </div>
    <div class="relative pl-8 md:pl-0">
      <div
        class="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden md:block"
        style="background: linear-gradient(180deg, #0d59f2 0%, rgba(13, 89, 242, 0.1) 100%)"
      ></div>
      <div
        v-for="(item, index) in fullExperience"
        :key="index"
        class="relative mb-20 md:flex md:justify-between md:items-center"
        :class="index % 2 !== 0 ? 'md:flex-row-reverse' : ''"
      >
        <div class="hidden md:block w-[45%]"></div>
        <div
          class="absolute left-0 md:left-1/2 size-4 bg-primary rounded-full -translate-x-1/2 border-4 z-10"
          style="border-color:#101622; box-shadow: 0 0 15px rgba(13,89,242,0.6);"
        ></div>
        <div
          class="md:w-[45%] p-6 rounded-xl transition-all duration-300 hover:border-primary/40"
          style="background: rgba(255,255,255,0.03); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.08);"
        >
          <div class="flex items-center gap-4 mb-5">
            <img
              v-if="item.company_image"
              :src="item.company_image"
              alt="company logo"
              class="w-10 h-10 rounded-md object-contain bg-white p-1"
            />
            <div>
              <span class="text-primary text-xs font-bold uppercase tracking-widest">
                {{ item.working_duration }}
              </span>
              <h3 class="text-xl font-bold text-white leading-tight">
                {{ item.designation }}
              </h3>
              <p class="text-slate-400 font-medium">
                {{ item.companyname }}
              </p>
            </div>
          </div>

          <!-- Points -->
          <ul class="space-y-3 mb-6">
            <li
              v-for="(point, i) in item.points"
              :key="i"
              class="flex gap-3 text-sm text-slate-300 leading-relaxed"
            >
              <span class="text-primary mt-1 material-symbols-outlined text-xs">
                fiber_manual_record
              </span>
              <span>{{ point }}</span>
            </li>
          </ul>

          <!-- Skills -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in splitSkills(item.skill_set)"
              :key="skill"
              class="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded border border-primary/20"
            >
              {{ skill }}
            </span>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { experience } from "../setup";

const openSourceExperience = {
  companyname: "Open Source Community",
  designation: "Open Source Contributor",
  working_duration: "2023 - Present",
  skill_set: "GitHub, Vue.js, React, Documentation",
  company_image: "",
  points: [
    "Contributed to open-source repositories and community-driven projects.",
    "Fixed bugs and improved documentation for better developer experience.",
    "Built personal projects and shared them publicly on GitHub.",
    "Actively participated in collaborative development workflows.",
  ],
};

const fullExperience = computed(() => [
  ...experience,
  openSourceExperience,
]);

function splitSkills(skills) {
  return skills.split(",").map((s) => s.trim());
}
</script>
