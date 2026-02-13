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
  </div>
</template>

<script>
import NavbarComponent from "./NavbarComponent.vue";
import AboutComponent from "./AboutComponent.vue";
import ExperienceComponent from "./ExperienceComponent.vue";
import OpenSourceProjects from "./OpenSourceProjects.vue";
import FooterComponent from "./FooterComponent.vue";
import ScrollToTop from "./ScrollToTop.vue";

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
};
</script>
