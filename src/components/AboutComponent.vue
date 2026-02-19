<template>
  <div class="overflow-x-hidden">
    <main
      class="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-6 relative overflow-x-hidden"
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
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4"
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
          Talha Waleed
        </h1>

        <div class="space-y-4">
          <p class="text-xl md:text-2xl font-semibold text-primary tracking-tight">
            Software Engineer | AI Developer | Vue.js & Python
          </p>
          <p class="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            I build scalable AI-powered and full stack products with modern frontend architecture, strong backend
            foundations, and production-focused performance optimization.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            @click="scrollTo('projects')"
            class="w-full sm:w-auto min-w-[180px] bg-primary hover:bg-primary/90 text-white h-14 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
          >
            View Projects
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
          <button
            type="button"
            @click="openWhatsApp()"
            class="w-full sm:w-auto min-w-[180px] glass-panel hover:bg-white/5 text-white h-14 rounded-xl font-bold transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <div class="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </main>
    <section class="py-24 px-6 relative bg-background-dark overflow-x-hidden">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-12 gap-16 items-start">
          <div class="lg:col-span-7 space-y-10">
            <div class="space-y-4">
              <h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
              <div class="h-1.5 w-20 bg-primary rounded-full"></div>
            </div>

            <div class="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a
                <span class="text-white font-medium">Software Engineer</span>
                specializing in
                <span class="text-white font-medium">Machine Learning (ML)</span>,
                <span class="text-white font-medium">Artificial Intelligence (AI)</span>,
                <span class="text-white font-medium">Frontend Development</span>,
                <span class="text-white font-medium">Vue.js</span>, and
                <span class="text-white font-medium">Python Backend Development</span>.
              </p>

              <p>
                I design and deliver full stack systems using modern frontend technologies and reliable backend
                services. My focus is clean architecture, maintainable code, and measurable product performance across
                web applications.
              </p>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <div class="p-5 rounded-xl glass-panel group hover:border-primary/40 transition-all">
                <span class="material-symbols-outlined text-primary mb-3">memory</span>
                <h3 class="text-white font-bold mb-1">Performance First</h3>
                <p class="text-sm text-slate-500">
                  Specializing in memory leak prevention and DOM optimization for high-data apps.
                </p>
              </div>

              <div class="p-5 rounded-xl glass-panel group hover:border-primary/40 transition-all">
                <span class="material-symbols-outlined text-primary mb-3">architecture</span>
                <h3 class="text-white font-bold mb-1">Scalable Architecture</h3>
                <p class="text-sm text-slate-500">
                  Implementing modular MVVM patterns for maintainable and testable codebases.
                </p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-8">
            <div class="relative group">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"
              ></div>

              <div
                class="relative bg-[#1a1d26] rounded-2xl aspect-square overflow-hidden border border-white/5 flex items-center justify-center p-8"
              >
                <div
                  class="w-full h-full rounded-xl bg-slate-800/50 flex flex-col items-center justify-center text-center gap-4 border border-dashed border-slate-700"
                >
                  <span class="material-symbols-outlined text-6xl text-slate-700">developer_mode_tv</span>
                  <p class="text-slate-400 font-medium">
                    Visualizing complex systems through elegant code.
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <h3 class="text-sm font-bold uppercase tracking-widest text-slate-500">
                Core Technology Stack
              </h3>

              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                  Vue.js
                </span>
                <span class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold">
                  Pinia
                </span>
                <span class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold">
                  TypeScript
                </span>
                <span class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold">
                  React
                </span>
                <span class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold">
                  Next.js
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
import { computed } from 'vue'
import { useSeo } from '../composables/useSeo'

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
  "description": "Software Engineer specializing in Machine Learning, Artificial Intelligence, Vue.js, Frontend Development, Backend Development, Python, and Full Stack Development.",
  "jobTitle": "Software Engineer",
  "knowsAbout": [
    "Machine Learning",
    "Artificial Intelligence",
    "Frontend Development",
    "Vue.js",
    "Modern Frontend Technologies",
    "Backend Development",
    "Python",
    "Full Stack Development"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Software Engineer",
    "skills": "Machine Learning, Artificial Intelligence, Vue.js, Frontend Development, Python, Backend Development, Full Stack Development"
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
  "description": "Learn more about Talha Waleed, a Software Engineer specializing in ML, AI, Vue.js, frontend, backend, Python, and full stack development."
}))

useSeo({
  schema: [personSchema, aboutPageSchema]
})

const WHATSAPP_NUMBER = "923065167490"

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
