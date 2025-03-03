<template>
<NavbarComponent />
<AboutComponent/>
<SkillComponent/>
<ExperienceComponent/>
<OpenSourceProjects/>

</template>

<script>
import NavbarComponent from "./NavbarComponent.vue";
import AboutComponent from "./AboutComponent.vue";
import SkillComponent from "./SkillComponent.vue";
import ExperienceComponent from "./ExperienceComponent.vue";
import OpenSourceProjects from "./OpenSourceProjects.vue";
export default {
    name: "HomeComponent",
    components: {
        NavbarComponent,
        AboutComponent,
        SkillComponent,
        ExperienceComponent,
        OpenSourceProjects,
    },
};
</script>
