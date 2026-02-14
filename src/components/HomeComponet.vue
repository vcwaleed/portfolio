<template class="bg-pri_col">
  <div>
    <NavbarComponent />
    <div id="home">
      <AboutComponent />
    </div>
    <div id="stack">
      <ExperienceComponent />
    </div>
    <div id="projects">
      <OpenSourceProjects
        github-username="vcwaleed"
        :project-names="['expense-tracker', 'photohub', 'portfolio']"
      />
    </div>
    <div id="contact">
      <FooterComponent />
    </div>

    <ScrollToTop />
    <component :is="'script'" type="application/ld+json" v-html="webPageSchema"></component>
  </div>
</template>

<script>
import NavbarComponent from "./NavbarComponent.vue";
import AboutComponent from "./AboutComponent.vue";
import ExperienceComponent from "./ExperienceComponent.vue";
import OpenSourceProjects from "./OpenSourceProjects.vue";
import FooterComponent from "./FooterComponent.vue";
import ScrollToTop from "./ScrollToTop.vue";
import { computed } from 'vue';
import { useSeo } from '../composables/useSeo';

export default {
  name: "HomeComponent",
  components: {
    NavbarComponent,
    AboutComponent,
    ExperienceComponent,
    OpenSourceProjects,
    FooterComponent,
    ScrollToTop,
  },
  setup() {
    useSeo(); // This will pick up meta from routes.js

    const webPageSchema = computed(() => JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Talha Waleed - Software Engineer Portfolio",
      "url": "https://talhawaleed.online",
      "description": "Official portfolio of Talha Waleed, a Software Engineer specializing in ML, AI, Vue.js, frontend development, backend development, Python, and full stack systems.",
      "publisher": {
        "@type": "Person",
        "name": "Talha Waleed"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://talhawaleed.online/projects?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }));

    return {
      webPageSchema
    }
  }
};
</script>
