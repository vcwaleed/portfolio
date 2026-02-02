<template>
    <section class="flex flex-col md:flex-row items-center justify-between font-display p-6 px-10">
      <div class="flex flex-col w-full md:w-[50%] ">
        <span class="text-4xl text-btn_col font-bold">Reach Out to Me!</span>
        <span class="text-white ">
          Feel free to reach out if you have a project in mind, or even just to say hello.
        </span>
        <span class="text-sm text-white ">Open for opportunities: Yes</span>
        <div class="mt-4">
          <h3 class="text-lg text-b text-white semibold mb-2">Contact Me</h3>
          <div class="flex space-x-6">
            <a :href="'mailto:' + about.email" target="_blank" class="text-btn_col hover:text-gray-300 text-2xl">
              <Mail class="w-6 h-6" />
            </a>
            <a :href="about.githublink" target="_blank" class="text-btn_col hover:text-gray-300 text-2xl">
              <Github class="w-6 h-6" />
            </a>
            <a :href="about.linkedin" target="_blank" class="text-btn_col hover:text-gray-300 text-2xl">
              <Linkedin class="w-6 h-6" />
            </a>
            <a :href="'https://wa.me/' + about.phoneNumber" target="_blank" class="text-btn_col hover:text-gray-300 text-2xl">
              <PhoneCall class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
  
      <div class="mt-6 md:mt-0">
        <img :src="githubProfileImage" alt="GitHub Profile" class="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg">
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { Mail, Github, Linkedin, PhoneCall} from "lucide-vue-next";
  import { aboutData } from "../setup";
  
  export default {
    name: "FooterComponent",
    components: { Mail, Github, Linkedin, PhoneCall },
    setup() {
      const about = ref(aboutData);
      const githubProfileImage = ref("");
  
      const fetchGitHubImage = async () => {
        try {
          const response = await fetch(`https://api.github.com/users/${about.value.githubUsername}`);
          const data = await response.json();
          githubProfileImage.value = data.avatar_url;
        } catch (error) {
          console.error("Error fetching GitHub profile image:", error);
        }
      };
  
      onMounted(fetchGitHubImage);
  
      return {
        about,
        githubProfileImage
      };
    }
  };
  </script>
  