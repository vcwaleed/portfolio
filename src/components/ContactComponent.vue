<template>
  <main class="contact">
    <h1>Contact Talha Waleed - Software Engineer</h1>
    <p>
      Available for ML Engineer, AI Developer, Vue.js Developer, Frontend Specialist, Python Developer, Backend
      Developer, and Full Stack Developer opportunities.
    </p>

    <ul>
      <li><strong>Email:</strong> <a href="mailto:talhawaleed460@gmail.com">talhawaleed460@gmail.com</a></li>
      <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/talhawaleed/" target="_blank" rel="noopener">talhawaleed</a></li>
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
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}
</style>
