<template>
  <section
    class="flex flex-col items-center justify-center gap-12 px-6 py-12 md:flex-row md:gap-24 lg:gap-32 font-display"
  >
    <div class="w-full max-w-lg lg:max-w-xl space-y-10">
      <h2 class="text-5xl md:text-6xl font-bold tracking-tight text-btn_col">
        Proficiency
      </h2>

      <div class="space-y-8">
        <div v-for="skill in skills" :key="skill.name" class="group">
          <div class="mb-2 flex items-baseline justify-between">
            <span class="text-xl font-semibold text-text_col dark:text-gray-100">
              {{ skill.name }}
            </span>
            <span class="text-base font-medium text-gray-500 dark:text-gray-400">
              {{ skill.level }}%
            </span>
          </div>

          <div class="h-4 rounded-full bg-gray-200 dark:bg-gray-700/60 shadow-inner overflow-hidden">
            <div
              class="h-full rounded-full bg-gradient-to-r from-btn_col via-indigo-500 to-purple-500 transition-all duration-1000 ease-out group-hover:scale-x-105 group-hover:brightness-110"
              :style="{ width: `${skill.level}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div
      ref="lottieContainer"
      class="w-full max-w-[320px] aspect-square md:max-w-[420px] lg:max-w-[480px]"
      aria-hidden="true"
    ></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import lottie from 'lottie-web'
import proficiencyAnimation from '@/assets/Proficiency.json'

const lottieContainer = ref(null)
let animation = null

const skills = [
  { name: 'JavaScript / TypeScript', level: 95 },
  { name: 'Frontend & UI/UX',        level: 90 },
  { name: 'Backend & APIs',          level: 80 },
]

onMounted(() => {
  if (!lottieContainer.value) return

  animation = lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: proficiencyAnimation,
  })
})

onUnmounted(() => {
  if (animation) {
    animation.destroy()
    animation = null
  }
})
</script>
