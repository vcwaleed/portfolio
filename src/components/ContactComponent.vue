<template>
  <main class="contact">
    <h1>Contact Me</h1>
    <p>Want to collaborate or hire me? Reach out and I’ll respond as soon as possible.</p>

    <ul>
      <li><strong>Email:</strong> <a href="mailto:talha@example.com">talha@example.com</a></li>
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
  "description": "Get in touch with Talha Waleed for collaborations, job opportunities, or frontend development inquiries."
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
