<template>
  <div class="overflow-x-hidden">
    <main
      class="grow flex flex-col items-center justify-center pt-32 pb-20 px-6 relative overflow-x-hidden"
    >
      <div class="absolute inset-0 hero-gradient -z-10"></div>
      <div
        class="absolute top-1/4 left-1/2 -translate-x-1/2 size-96 bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/2 translate-x-1/2 size-96 bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none"
      ></div>

      <div class="max-w-4xl w-full text-center space-y-8">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4 floating-badge"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for new projects
        </div>

        <h1 class="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
          <span class="typing-name-text">{{ typedName }}</span>
          <span v-if="showTypingCaret" class="typing-caret">|</span>
        </h1>

        <div class="space-y-4">
          <p class="text-xl md:text-2xl font-semibold text-primary tracking-tight">
            Frontend Engineer | Vue.js | MVVM & Memory Optimization
          </p>
          <p class="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            I build scalable frontend systems with Vue.js, MVVM architecture, and memory-safe component patterns for
            smooth, production-grade user experiences.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            @click="scrollTo('projects')"
            class="about-cta w-full sm:w-auto min-w-45 bg-primary hover:bg-primary/90 text-white h-14 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
          >
            View Projects
            <span class="material-symbols-outlined cta-icon">arrow_forward</span>
          </button>
          <button
            type="button"
            @click="openWhatsApp()"
            class="about-cta w-full sm:w-auto min-w-45 glass-panel hover:bg-white/5 text-white h-14 rounded-xl font-bold transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <div class="w-px h-12 bg-linear-to-b from-primary to-transparent"></div>
      </div>
    </main>
    <section ref="aboutSectionRef" class="py-24 px-6 relative bg-background-dark overflow-x-hidden">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-12 gap-16 items-start">
          <div class="lg:col-span-7 space-y-10">
            <div class="space-y-4 reveal-up" :class="{ 'is-visible': aboutVisible }">
              <h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
              <div class="h-1.5 w-20 bg-primary rounded-full"></div>
            </div>

            <div class="space-y-6 text-slate-400 text-lg leading-relaxed reveal-up" :class="{ 'is-visible': aboutVisible }">
              <p>
                I am a
                <span class="text-white font-medium">Frontend Engineer</span>
                specializing in
                <span class="text-white font-medium">Frontend Development</span>,
                <span class="text-white font-medium">Vue.js</span>,
                <span class="text-white font-medium">MVVM architecture</span>, and
                <span class="text-white font-medium">memory optimization</span>.
              </p>

              <p>
                I design maintainable interfaces using composables, clear view-model boundaries, and lifecycle-safe
                patterns. My focus is preventing memory leaks, reducing re-renders, and keeping large UIs responsive.
              </p>
            </div>

            <div class="grid sm:grid-cols-2 gap-4 reveal-up" :class="{ 'is-visible': aboutVisible }">
              <div class="p-5 rounded-xl glass-panel group hover:border-primary/40 transition-all hover:-translate-y-1">
                <span class="material-symbols-outlined text-primary mb-3">memory</span>
                <h3 class="text-white font-bold mb-1">Memory-Safe UI</h3>
                <p class="text-sm text-slate-500">
                  I avoid listener leaks, stale watchers, and unnecessary retained references in long-lived views.
                </p>
              </div>

              <div class="p-5 rounded-xl glass-panel group hover:border-primary/40 transition-all hover:-translate-y-1">
                <span class="material-symbols-outlined text-primary mb-3">architecture</span>
                <h3 class="text-white font-bold mb-1">MVVM Frontend</h3>
                <p class="text-sm text-slate-500">
                  Components stay clean by separating UI, state, and business logic into predictable layers.
                </p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-8 reveal-up" :class="{ 'is-visible': aboutVisible }">
            <div class="relative group">
              <div
                class="absolute -inset-1 bg-linear-to-r from-primary to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"
              ></div>

              <div
                class="relative bg-[#1a1d26] rounded-2xl aspect-square overflow-hidden border border-white/5 flex items-center justify-center p-8"
              >
                <div
                  class="w-full h-full rounded-xl bg-slate-800/50 flex flex-col items-center justify-center text-center gap-4 border border-dashed border-slate-700"
                >
                  <span class="material-symbols-outlined text-6xl text-slate-700">developer_mode_tv</span>
                  <p class="text-slate-400 font-medium">
                    Building fast, maintainable frontends with clean architecture.
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <h3 class="text-sm font-bold uppercase tracking-widest text-slate-500">
                Frontend Core Stack
              </h3>

              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                  Vue.js
                </span>
                <span class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold">
                  MVVM
                </span>
                <span class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold">
                  Pinia
                </span>
                <span class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold">
                  Vue Router
                </span>
                <span class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold">
                  TypeScript
                </span>
                <span class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold">
                  Memory Profiling
                </span>
                <span class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold">
                  Performance Tuning
                </span>
                <span class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold">
                  Tailwind CSS
                </span>
                <span class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold">
                  Vite
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <component :is="'script'" type="application/ld+json" v-html="personSchema"></component>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useSeo } from '../composables/useSeo'

const aboutSectionRef = ref(null)
const aboutVisible = ref(false)
let aboutObserver = null
const FULL_NAME = "Talha Waleed"
const typedName = ref("")
const showTypingCaret = ref(true)
let typingTimer = null

const personSchema = computed(() => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Talha Waleed",
  "url": "https://talhawaleed.online",
  "image": "https://talhawaleed.online/linkedmatrix.png",
  "sameAs": [
    "https://www.linkedin.com/in/talhawaleed/",
    "https://github.com/vcwaleed"
  ],
  "description": "Frontend Engineer specializing in Vue.js, MVVM architecture, memory optimization, and high-performance UI engineering.",
  "jobTitle": "Frontend Engineer",
  "knowsAbout": [
    "Frontend Development",
    "Vue.js",
    "MVVM Architecture",
    "Memory Optimization",
    "Performance Engineering",
    "Modern Frontend Technologies"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Frontend Engineer",
    "skills": "Vue.js, MVVM, Frontend Development, Memory Optimization, Performance Engineering, TypeScript"
  },
  "worksFor": { "@type": "Organization", "name": "Freelance" },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "COMSATS University Islamabad"
  }
}))
const aboutPageSchema = computed(() => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Talha Waleed",
  "url": "https://talhawaleed.online/about",
  "description": "Learn more about Talha Waleed, a Frontend Engineer focused on Vue.js, MVVM architecture, and memory-optimized UI development."
}))

useSeo({
  schema: [personSchema, aboutPageSchema]
})

const WHATSAPP_NUMBER = "923065167490"

onMounted(() => {
  if (aboutSectionRef.value) {
    aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutVisible.value = true
          aboutObserver?.disconnect()
          aboutObserver = null
        }
      },
      { threshold: 0.2 }
    )

    aboutObserver.observe(aboutSectionRef.value)
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (reduceMotion) {
    typedName.value = FULL_NAME
    showTypingCaret.value = false
    return
  }

  startNameTyping()
})

onBeforeUnmount(() => {
  aboutObserver?.disconnect()
  if (typingTimer) clearTimeout(typingTimer)
})

function startNameTyping() {
  typedName.value = ""
  showTypingCaret.value = true
  let i = 0

  const typeNext = () => {
    if (i >= FULL_NAME.length) {
      typingTimer = setTimeout(() => {
        showTypingCaret.value = false
      }, 900)
      return
    }

    typedName.value += FULL_NAME[i]
    i += 1
    const nextDelay = i % 4 === 0 ? 120 : 85
    typingTimer = setTimeout(typeNext, nextDelay)
  }

  typingTimer = setTimeout(typeNext, 220)
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function openWhatsApp() {
  const msg = encodeURIComponent("Hi Talha! I want to discuss a project.")
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer")
}
</script>

<style scoped>
.typing-name-text {
  display: inline-block;
  min-height: 1em;
  text-shadow: 0 0 18px rgba(13, 89, 242, 0.2);
}

.typing-caret {
  display: inline-block;
  margin-left: 2px;
  color: #0d59f2;
  animation: cursorBlink 0.8s step-end infinite;
}

.reveal-up {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.floating-badge {
  animation: floatBadge 4.2s ease-in-out infinite;
}

.about-cta {
  position: relative;
  overflow: hidden;
  transform: translateY(0) scale(1);
  transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
}

.about-cta::before {
  content: "";
  position: absolute;
  top: -120%;
  left: -40%;
  width: 60%;
  height: 320%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: rotate(18deg);
  transition: left 420ms ease;
  pointer-events: none;
}

.about-cta:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 10px 30px rgba(13, 89, 242, 0.25);
}

.about-cta:hover::before {
  left: 115%;
}

.about-cta:active {
  transform: translateY(0) scale(0.99);
}

.cta-icon {
  transition: transform 240ms ease;
}

.about-cta:hover .cta-icon {
  transform: translateX(4px);
}

@keyframes cursorBlink {
  50% {
    opacity: 0;
  }
}

@keyframes floatBadge {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal-up,
  .reveal-up.is-visible,
  .floating-badge,
  .typing-name-text,
  .typing-caret,
  .about-cta,
  .about-cta::before,
  .cta-icon {
    animation: none !important;
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }

  .typing-caret { display: none !important; }
}
</style>
