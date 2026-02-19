<template>
  <main class="contact text-slate-100">
    <h1 class="text-3xl font-bold text-white">Contact Talha Waleed - Software Engineer</h1>
    <p>
      Available for ML Engineer, AI Developer, Vue.js Developer, Frontend Specialist, Python Developer, Backend
      Developer, and Full Stack Developer opportunities.
    </p>

    <ul class="space-y-2">
      <li><strong>Email:</strong> <a class="text-primary hover:underline" href="mailto:talhawaleed460@gmail.com">talhawaleed460@gmail.com</a></li>
      <li><strong>LinkedIn:</strong> <a class="text-primary hover:underline" href="https://www.linkedin.com/in/talhawaleed/" target="_blank" rel="noopener">talhawaleed</a></li>
    </ul>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useSeo } from '../composables/useSeo'

const contactSchema = computed(() => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Talha Waleed",
  "url": "https://talhawaleed.online/contact",
  "description": "Get in touch with Talha Waleed for Software Engineer opportunities in ML, AI, Vue.js, frontend, backend, Python, and full stack development."
}))

useSeo({ schema: [contactSchema] })
</script>

<style scoped>
.contact {
  padding: 32px 20px;
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #0a0e19;
  color: #f1f5f9;
  line-height: 1.6;
}
</style>
