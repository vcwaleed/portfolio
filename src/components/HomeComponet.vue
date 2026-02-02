<template class="bg-pri_col">
  <div>
  <NavbarComponent />
  <AboutComponent />
  <div id="skills">
      <SkillComponent />
  </div>
  <div id="experience">
      <ExperienceComponent />
  </div>
  <div id="opensource">
      <OpenSourceProjects />
  </div>
  <div id="work">
      <WorkExperience />
  </div>
  <div id="contact"></div>
  <FooterComponent />
  <ScrollToTop />
</div>
</template>

<script>
import NavbarComponent from "./NavbarComponent.vue";
import AboutComponent from "./AboutComponent.vue";
import SkillComponent from "./SkillComponent.vue";
import ExperienceComponent from "./ExperienceComponent.vue";
import OpenSourceProjects from "./OpenSourceProjects.vue";
import FooterComponent from "./FooterComponent.vue";
import WorkExperience from "./WorkExperience.vue";
import ScrollToTop from "./ScrollToTop.vue";
export default {
    name: "HomeComponent",
    components: {
        NavbarComponent,
        AboutComponent,
        SkillComponent,
        ExperienceComponent,
        OpenSourceProjects,
        FooterComponent,
        WorkExperience,
        ScrollToTop,
    },

};
</script>
