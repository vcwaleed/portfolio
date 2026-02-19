<template>
  <div class="min-h-screen bg-background-dark text-slate-100 selection:bg-primary/30">
    <router-view />
  </div>
</template>

<script setup>
import { useSeo } from './composables/useSeo'

useSeo()
</script>

<script>
export default {
  name: "App",
};
</script>
