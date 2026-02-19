<template>
  <div class="min-h-screen text-slate-100">
    <NavbarComponent />

    <main class="max-w-7xl mx-auto px-6 pt-32 pb-16">
      <header class="mb-10 space-y-4" data-aos="fade-up">
        <h1 class="text-4xl md:text-5xl font-black tracking-tight text-white">Landing Page Showcase</h1>
        <p class="text-slate-400 max-w-2xl">
          A curated collection of landing pages, product sites, and modern web experiences.
        </p>

        <div class="max-w-md">
          <label for="ui-kit-search" class="sr-only">Search showcase projects</label>
          <input
            id="ui-kit-search"
            v-model.trim="searchQuery"
            type="text"
            placeholder="Search by name or tag..."
            class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-primary"
          />
        </div>
      </header>

      <section>
        <div v-if="filteredProjects.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="rounded-2xl border border-white/10 bg-[#161b26] overflow-hidden flex flex-col"
            data-aos="fade-up"
            :data-aos-delay="index * 80"
          >
            <div class="aspect-video bg-slate-800 relative">
              <iframe
                v-if="!previewFailed.has(project.id)"
                :src="project.url"
                class="w-full h-full border-0 pointer-events-none"
                loading="lazy"
                referrerpolicy="no-referrer"
                @error="markPreviewFailed(project.id)"
              />
              <div
                v-else-if="project.thumbnail && !failedThumbnails.has(project.id)"
                class="w-full h-full"
              >
                <img
                  :src="project.thumbnail"
                  :alt="`${project.name} thumbnail`"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  @error="markThumbnailFailed(project.id)"
                />
              </div>
              <div
                v-else
                class="w-full h-full flex items-center justify-center text-slate-500 text-sm border-b border-white/5"
              >
                No preview available
              </div>
            </div>

            <div class="p-5 flex flex-col gap-4 flex-1">
              <div class="space-y-2">
                <h2 class="text-xl font-bold text-white">{{ project.name }}</h2>
                <p class="text-sm text-slate-400 leading-relaxed">{{ project.description }}</p>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="`${project.id}-${tag}`"
                  class="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-semibold tracking-wide text-slate-300"
                >
                  {{ tag }}
                </span>
              </div>

              <a
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary/90 px-4 py-2.5 text-sm font-bold text-white transition"
              >
                Open Project
                <span class="material-symbols-outlined text-base">open_in_new</span>
              </a>
            </div>
          </article>
        </div>

        <div v-else class="rounded-xl border border-white/10 bg-white/5 p-8 text-center text-slate-400">
          No UI kit projects matched your search.
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import NavbarComponent from './NavbarComponent.vue'
import uikitProjects from '../data/uikit.json'

const searchQuery = ref('')
const failedThumbnails = ref(new Set())
const previewFailed = ref(new Set())

const filteredProjects = computed(() => {
  const query = searchQuery.value.toLowerCase()
  if (!query) return uikitProjects

  return uikitProjects.filter((project) => {
    const name = (project.name || '').toLowerCase()
    const tags = (project.tags || []).join(' ').toLowerCase()
    return name.includes(query) || tags.includes(query)
  })
})

function markThumbnailFailed(id) {
  failedThumbnails.value.add(id)
}

function markPreviewFailed(id) {
  previewFailed.value.add(id)
}

onMounted(() => {
  AOS.init({
    duration: 700,
    once: true,
    easing: 'ease-out-cubic'
  })
})
</script>
