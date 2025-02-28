<template>
<NavbarComponent />

<AboutComponent/>

<h2>Home component</h2>
</template>

<script>
import NavbarComponent from "./NavbarComponent.vue";
import AboutComponent from "./AboutComponent.vue";
export default {
    name: "HomeComponent",
    components: {
        NavbarComponent,
        AboutComponent,
    },
};
</script>
