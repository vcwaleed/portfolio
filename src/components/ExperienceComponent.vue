<template>
  <section class="experience-section max-w-6xl mx-auto px-6 py-16 w-full font-display">
    <div class="experience-glow eg-1"></div>
    <div class="experience-glow eg-2"></div>
    <div class="flex items-center justify-between mb-14">
      <div class="flex items-center gap-4">
        <span class="material-symbols-outlined text-primary text-3xl">
          work_history
        </span>
        <h2 class="text-3xl font-bold text-white tracking-tight">
          Professional Experience
        </h2>
      </div>

      <div
        class="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold"
      >
        2.5+ Years Experience
      </div>
    </div>

    <div class="relative pl-8 md:pl-0">
      <div
        ref="timelineWrapper"
        class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
      >
        <div class="absolute inset-0 bg-white/10"></div>

        <div
          ref="progressLine"
          class="absolute top-0 left-0 w-full origin-top"
          style="
            height: 0%;
            background: linear-gradient(180deg, #0d59f2 0%, #3b82f6 100%);
            box-shadow: 0 0 18px rgba(13, 89, 242, 0.55);
          "
        ></div>
      </div>

      <div
        v-for="(item, index) in fullExperience"
        :key="itemKey(item, index)"
        class="relative mb-20 md:flex md:justify-between md:items-center"
        :class="index % 2 !== 0 ? 'md:flex-row-reverse' : ''"
        :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        :data-aos-delay="index * 120"
      >
        <div class="hidden md:block w-[45%]"></div>

        <div
          class="absolute left-0 md:left-1/2 size-4 bg-primary rounded-full -translate-x-1/2 border-4 z-10"
          style="
            border-color: #101622;
            box-shadow: 0 0 15px rgba(13, 89, 242, 0.6);
          "
        >
          <span class="timeline-node-pulse"></span>
        </div>

        <div
          class="exp-card md:w-[45%] p-6 rounded-xl transition-all duration-300 hover:border-primary/40"
          style="
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
          "
          @mousemove="onCardMove($event)"
          @mouseleave="resetCard($event)"
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

          <ul class="space-y-3 mb-6">
            <li
              v-for="(point, i) in item.points"
              :key="`${itemKey(item, index)}-point-${i}`"
              class="point-item flex gap-3 text-sm text-slate-300 leading-relaxed"
              :style="{ '--point-delay': `${i * 80}ms` }"
            >
              <span class="text-primary mt-1 material-symbols-outlined text-xs">
                fiber_manual_record
              </span>
              <span>{{ point }}</span>
            </li>
          </ul>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, skillIndex) in splitSkills(item.skill_set)"
              :key="`${itemKey(item, index)}-skill-${skill}`"
              class="skill-pill px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded border border-primary/20"
              :style="{ '--skill-delay': `${skillIndex * 70}ms` }"
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
import { computed, onMounted, onBeforeUnmount, nextTick, ref } from "vue";
import { experience } from "../setup";

import AOS from "aos";
import "aos/dist/aos.css";

const timelineWrapper = ref(null);
const progressLine = ref(null);
const prefersReducedMotion = ref(false);

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

const fullExperience = computed(() => [...experience, openSourceExperience]);

function splitSkills(skills) {
  return (skills || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

// ✅ stable key (better than :key="index")
function itemKey(item, index) {
  // if you have item.id in your data, use that instead
  return item.id || `${item.companyname}-${item.designation}-${index}`;
}

function onCardMove(event) {
  if (prefersReducedMotion.value) return;

  const card = event.currentTarget;
  if (!card) return;

  const rect = card.getBoundingClientRect();
  const px = (event.clientX - rect.left) / rect.width;
  const py = (event.clientY - rect.top) / rect.height;

  const rotateY = (px - 0.5) * 7;
  const rotateX = (0.5 - py) * 6;

  card.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
  card.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
  card.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
  card.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
}

function resetCard(event) {
  const card = event.currentTarget;
  if (!card) return;

  card.style.setProperty("--rx", "0deg");
  card.style.setProperty("--ry", "0deg");
  card.style.setProperty("--mx", "50%");
  card.style.setProperty("--my", "50%");
}

function animateLine() {
  if (!timelineWrapper.value || !progressLine.value) return;

  const rect = timelineWrapper.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const totalHeight = rect.height || 1; 
  const visible = Math.min(Math.max(windowHeight - rect.top, 0), totalHeight);
  const progress = (visible / totalHeight) * 100;

  progressLine.value.style.height = `${progress}%`;
}

let rafId = null;
function onScroll() {
  if (rafId) return;

  rafId = requestAnimationFrame(() => {
    animateLine();
    rafId = null;
  });
}

onMounted(async () => {
  // ✅ SSR safety
  if (typeof window === "undefined") return;
  prefersReducedMotion.value = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  await nextTick();

  AOS.init({
    duration: 800,
    once: true,
    easing: "ease-out-cubic",
  });

  // ✅ refresh after DOM is ready
  requestAnimationFrame(() => {
    AOS.refresh();
    animateLine();
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", animateLine, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", animateLine);
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<style scoped>
.experience-section {
  position: relative;
  overflow-x: hidden;
}

.experience-glow {
  position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 999px;
  filter: blur(80px);
  pointer-events: none;
  z-index: -1;
  animation: glowFloat 7s ease-in-out infinite;
}

.eg-1 {
  background: rgba(13, 89, 242, 0.18);
  left: -90px;
  top: 70px;
}

.eg-2 {
  background: rgba(14, 165, 233, 0.16);
  right: -110px;
  bottom: 80px;
  animation-delay: 1.3s;
}

.timeline-node-pulse {
  position: absolute;
  inset: -6px;
  border-radius: 999px;
  border: 1px solid rgba(13, 89, 242, 0.45);
  animation: nodePulse 1.8s ease-out infinite;
}

.exp-card {
  --rx: 0deg;
  --ry: 0deg;
  --mx: 50%;
  --my: 50%;
  transform: perspective(920px) rotateX(var(--rx)) rotateY(var(--ry));
  transform-style: preserve-3d;
  transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
  position: relative;
  overflow: hidden;
}

.exp-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(220px circle at var(--mx) var(--my), rgba(125, 211, 252, 0.16), transparent 68%);
  opacity: 0;
  transition: opacity 200ms ease;
  pointer-events: none;
}

.exp-card:hover {
  box-shadow: 0 16px 40px rgba(13, 89, 242, 0.18);
}

.exp-card:hover::before {
  opacity: 1;
}

.point-item {
  opacity: 0;
  transform: translateX(-8px);
  animation: pointReveal 0.46s ease forwards;
  animation-delay: var(--point-delay);
}

.skill-pill {
  transform: translateY(0);
  opacity: 0;
  animation: skillReveal 0.45s ease forwards;
  animation-delay: var(--skill-delay);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.skill-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(13, 89, 242, 0.22);
  border-color: rgba(13, 89, 242, 0.45);
}

@keyframes glowFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-14px);
  }
}

@keyframes nodePulse {
  0% {
    transform: scale(0.75);
    opacity: 0.65;
  }
  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}

@keyframes pointReveal {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes skillReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .experience-glow,
  .timeline-node-pulse,
  .point-item,
  .skill-pill {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }

  .exp-card {
    transform: none !important;
    transition: none !important;
  }

  .exp-card::before {
    display: none;
  }
}
</style>
