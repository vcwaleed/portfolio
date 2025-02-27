<template>
    <NavbarComponent/>
    <h2>Home component</h2>
</template>
<script>
import NavbarComponent from './NavbarComponent.vue';
export default {
    name: 'HomeComponent',
    components:
    {
         NavbarComponent,
    }
}
</script>