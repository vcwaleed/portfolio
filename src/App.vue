<template>
  <div class="min-h-screen bg-background-dark text-slate-100 selection:bg-primary/30">
    <AnimatedCursor />
    <router-view />
  </div>
</template>

<script setup>
import { useSeo } from './composables/useSeo'
import AnimatedCursor from './components/AnimatedCursor.vue'

useSeo()
</script>

<script>
export default {
  name: "App",
};
</script>
