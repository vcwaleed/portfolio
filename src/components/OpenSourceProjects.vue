<template>
    <section class="flex items-center flex-col p-8">
      <span class="text-5xl font-bold font-mono mb-6">Open Source Projects</span>
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in selectedProjects" 
          :key="project.id"
          class="bg-sec_col p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 w-80"
        >
          <h2 class="text-xl font-semibold text-gray-800">{{ project.name || "no name " }}</h2>
          <p class="text-sm text-gray-300 mt-2">{{ project.description || "Visit to explore the repo" }}</p>
          <a 
            :href="project.html_url" 
            target="_blank"
            class="block mt-4 text-pri_col hover:underline"
          >
            View on GitHub →
          </a>
        </div>
      </section>
      <button
        @click="openGithub"
        class="bg-pri_col p-3 px-12 mt-6 rounded text-text_col hover:border-blue-950 hover:bg-btn_col hover:text-white transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
      >
        MORE PROJECTS
      </button>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { aboutData } from "../setup";
  
  export default {
    name: "OpenSourceProjects",
    setup() {
      const about = ref(aboutData);
      const selectedProjects = ref([]);
      const projectNames = ["expense-tracker", "photohub", "portfolio"];
  
      const fetchProjects = async () => {
        try {
          const response = await fetch(`https://api.github.com/users/${about.value.githubUsername}/repos`);
          const allProjects = await response.json();
          selectedProjects.value = allProjects.filter((project) => projectNames.includes(project.name));
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
      };
      const openGithub = () => {
        window.open(`${about.value.githublink}`);
      };
      onMounted(fetchProjects);
      return {
        openGithub,
        selectedProjects
      };
    }
  };
  </script>
  