<template>
  <footer class="relative mt-24 border-t border-white/10 font-display">
    <div class="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 py-14">
      <div
        class="rounded-2xl border border-white/10
               backdrop-blur-xl p-8 md:p-10"
      >
        <div class="flex flex-col md:flex-row items-center justify-between gap-10">
          <div class="w-full md:w-[60%] space-y-5">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <span class="material-symbols-outlined text-sm">mail</span>
              Contact
            </div>

            <h3 class="text-3xl md:text-4xl font-black tracking-tight text-white">
              Reach Out to Me!
            </h3>

            <p class="text-slate-400 max-w-xl">
              Feel free to reach out if you have a project in mind, or even just to say hello.
            </p>

            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                <span class="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                Open for opportunities: Yes
              </span>

              <a
                :href="`mailto:${about.email}`"
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10
                       text-slate-300 text-xs font-bold hover:border-primary/40 hover:text-primary transition-colors"
              >
                <span class="material-symbols-outlined text-sm">alternate_email</span>
                {{ about.email }}
              </a>
            </div>

            <!-- Icons -->
            <div class="pt-2">
              <p class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Contact Me
              </p>

              <div class="flex items-center gap-3">
                <a
                  :href="`mailto:${about.email}`"
                  target="_blank"
                  class="group inline-flex items-center justify-center w-11 h-11 rounded-xl
                         bg-white/5 border border-white/10
                         hover:border-primary/40 transition-colors"
                  aria-label="Email"
                >
                  <Mail class="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                </a>

                <a
                  :href="about.githublink"
                  target="_blank"
                  class="group inline-flex items-center justify-center w-11 h-11 rounded-xl
                         bg-white/5 border border-white/10
                         hover:border-primary/40 transition-colors"
                  aria-label="GitHub"
                >
                  <Github class="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                </a>

                <a
                  :href="about.linkedin"
                  target="_blank"
                  class="group inline-flex items-center justify-center w-11 h-11 rounded-xl
                         bg-white/5 border border-white/10
                         hover:border-primary/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin class="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                </a>

                <a
                  :href="`https://wa.me/${about.phoneNumber}`"
                  target="_blank"
                  class="group inline-flex items-center justify-center w-11 h-11 rounded-xl
                         bg-white/5 border border-white/10
                         hover:border-primary/40 transition-colors"
                  aria-label="WhatsApp"
                >
                  <PhoneCall class="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
            <div class="pt-3">
              <a
                :href="`mailto:${about.email}`"
                class="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl
                       hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(13,89,242,0.35)] transition-all active:scale-95"
              >
                Let’s Talk
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
          <div class="w-full md:w-[40%] flex items-center justify-center">
            <div class="relative">
              <div class="absolute -inset-6 bg-primary/20 blur-[70px] rounded-full"></div>

              <div
                class="relative rounded-2xl p-6 border border-white/10
                       bg-white/[0.03] backdrop-blur-xl"
              >
                <div class="flex flex-col items-center gap-4">
                  <div
                    class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 overflow-hidden
                           shadow-xl shadow-primary/10 bg-slate-800"
                  >
                    <img
                      v-if="githubProfileImage"
                      :src="githubProfileImage"
                      alt="GitHub Profile"
                      class="w-full h-full object-cover"
                    />
                    <div v-else class="w-full h-full flex items-center justify-center">
                      <span class="material-symbols-outlined text-4xl text-slate-400">person</span>
                    </div>
                  </div>

                  <div class="text-center">
                    <p class="text-lg font-bold text-white">
                      {{ about.name || 'vcwaleed' }}
                    </p>
                    <a
                      :href="about.githublink"
                      target="_blank"
                      class="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View GitHub
                      <span class="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>

                  <div class="w-full h-px bg-white/10"></div>

                  <p class="text-xs text-slate-400 text-center">
                    © {{ new Date().getFullYear() }} {{ about.name || 'Talha Waleed' }}. Built with Vue + Tailwind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-xs text-slate-400">
            Designed for clean UI, micro-interactions, and accessibility.
          </p>

          <div class="flex items-center gap-5 text-xs font-semibold">
            <a :href="about.githublink" target="_blank" class="text-slate-400 hover:text-primary transition-colors">
              GitHub
            </a>
            <a :href="about.linkedin" target="_blank" class="text-slate-400 hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a :href="`mailto:${about.email}`" class="text-slate-400 hover:text-primary transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Mail, Github, Linkedin, PhoneCall } from "lucide-vue-next";
import { aboutData } from "../setup";

const about = ref(aboutData);
const githubProfileImage = ref("");

async function fetchGitHubImage() {
  try {
    const res = await fetch(`https://api.github.com/users/${about.value.githubUsername}`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    const data = await res.json();
    githubProfileImage.value = data?.avatar_url || "";
  } catch (err) {
    console.error("Error fetching GitHub profile image:", err);
  }
}

onMounted(fetchGitHubImage);
</script>
