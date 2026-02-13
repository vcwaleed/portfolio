<template>
  <section class="max-w-7xl mx-auto px-6 py-12 space-y-24">

    <section id="projects">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div class="max-w-2xl space-y-4">
          <h2 class="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>

          <p class="text-slate-600 dark:text-slate-400 text-lg">
            Real-world projects I’ve built and deployed. Live previews (if the site allows embedding).
          </p>
        </div>
        <div
          class="flex gap-2 bg-slate-100 dark:bg-[#161b26] p-1 rounded-xl border border-slate-200 dark:border-[#282e39]">
          <button class="px-4 py-2 text-sm font-bold rounded-lg transition-colors" :class="activeFilter === 'all'
              ? 'bg-white dark:bg-primary text-slate-900 dark:text-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            " @click="activeFilter = 'all'">
            All
          </button>

          <button class="px-4 py-2 text-sm font-bold rounded-lg transition-colors" :class="activeFilter === 'web'
              ? 'bg-white dark:bg-primary text-slate-900 dark:text-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            " @click="activeFilter = 'web'">
            Web Apps
          </button>

          <button class="px-4 py-2 text-sm font-bold rounded-lg transition-colors" :class="activeFilter === 'ui'
              ? 'bg-white dark:bg-primary text-slate-900 dark:text-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            " @click="activeFilter = 'ui'">
            UI Kits
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a v-for="p in filteredLiveProjects" :key="p.url" :href="p.url" target="_blank" rel="noopener"
          class="group relative flex flex-col bg-white dark:bg-[#161b26] rounded-2xl border border-slate-200 dark:border-[#282e39] overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
          <div class="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
            <iframe class="absolute inset-0 w-full h-full pointer-events-none" :src="p.url" loading="lazy"
              referrerpolicy="no-referrer" @error="markPreviewFailed(p.url)"></iframe>
            <div class="absolute inset-0 bg-black/5 dark:bg-black/20"></div>
            <div v-if="previewFailed.has(p.url)"
              class="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-slate-200 dark:bg-slate-800">
              <span class="material-symbols-outlined text-4xl text-slate-400">visibility_off</span>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Preview not available (site blocks iframe).
              </p>
              <p class="text-xs text-slate-500 dark:text-slate-500">
                Click to open live demo.
              </p>
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
              <div class="flex gap-3 w-full">
                <span
                  class="flex-1 bg-primary text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                  <span class="material-symbols-outlined text-sm">visibility</span>
                  Live Demo
                </span>

                <span
                  class="flex-1 bg-white/10 backdrop-blur-md text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 border border-white/20">
                  <span class="material-symbols-outlined text-sm">open_in_new</span>
                  Open
                </span>
              </div>
            </div>
          </div>
          <div class="p-6 space-y-4">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                {{ p.title }}
              </h3>
              <span class="text-xs font-mono text-slate-400">{{ p.year }}</span>
            </div>

            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {{ p.description }}
            </p>

            <div class="flex flex-wrap gap-2 pt-2">
              <span v-for="tag in p.tags" :key="tag"
                class="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
                {{ tag }}
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
<section id="github" class="relative">
  <div class="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

  <div class="space-y-8">
    <!-- Header (mobile friendly) -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div class="flex items-start sm:items-center gap-4">
        <div class="size-12 shrink-0 bg-[#24292f] text-white rounded-xl flex items-center justify-center">
          <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.384 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.837 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </div>

        <div class="min-w-0">
          <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            GitHub Activity
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-sm break-words">
            @{{ githubUsername }} • {{ displayRepoCount }} repos
          </p>
          <p v-if="errorMsg" class="text-red-500 text-xs mt-1">{{ errorMsg }}</p>
        </div>
      </div>

      <a
        class="inline-flex items-center gap-2 text-primary font-bold hover:underline self-start md:self-auto"
        :href="`https://github.com/${githubUsername}`"
        target="_blank"
      >
        View Full Profile
        <span class="material-symbols-outlined text-sm">open_in_new</span>
      </a>
    </div>

    <!-- Content -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Top Languages -->
      <div
        class="lg:col-span-4 bg-white dark:bg-[#161b26] border border-slate-200 dark:border-[#282e39] p-5 sm:p-6 rounded-2xl space-y-6"
      >
        <h3 class="text-sm font-bold uppercase tracking-widest text-slate-400">
          Top Languages
        </h3>

        <div class="space-y-5">
          <div v-for="l in customLanguages" :key="l.name" class="space-y-2">
            <div class="flex justify-between text-sm text-slate-900 dark:text-white">
              <span class="font-medium">{{ l.name }}</span>
              <span class="font-bold text-primary">{{ l.percent }}%</span>
            </div>

            <div class="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full" :class="l.barClass" :style="{ width: `${l.percent}%` }"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Commit + Pinned -->
      <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Commit History (mobile scroll) -->
        <div
          class="md:col-span-2 bg-white dark:bg-[#161b26] border border-slate-200 dark:border-[#282e39] p-5 sm:p-6 rounded-2xl"
        >
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <h3 class="text-sm font-bold uppercase tracking-widest text-slate-400">
              Commit History
            </h3>

            <div class="flex items-center gap-2 text-xs text-slate-500">
              <span>Less</span>
              <div class="flex gap-1">
                <div class="w-3 h-3 rounded-sm bg-[#0e4429]"></div>
                <div class="w-3 h-3 rounded-sm bg-[#006d32]"></div>
                <div class="w-3 h-3 rounded-sm bg-[#26a641]"></div>
                <div class="w-3 h-3 rounded-sm bg-[#39d353]"></div>
              </div>
              <span>More</span>
            </div>
          </div>

          <!-- ✅ mobile: scroll, desktop: no need -->
          <div class="overflow-x-auto pb-2 -mx-1 px-1">
            <div
              class="grid grid-rows-7 grid-flow-col gap-1 min-w-max"
              :style="{ gridTemplateColumns: `repeat(${weeks}, min-content)` }"
            >
              <div
                v-for="(lvl, i) in heatmap"
                :key="i"
                class="rounded-[2px] w-2 h-2 sm:w-[9px] sm:h-[9px] md:w-[11px] md:h-[11px]"
                :class="heatClass(lvl)"
              ></div>
            </div>
          </div>

          <p class="mt-2 text-[11px] text-slate-500 sm:hidden">
            Tip: swipe left/right to view full year
          </p>
        </div>

        <!-- pinned repos -->
        <a
          v-for="r in pinnedRepos"
          :key="r.id"
          :href="r.html_url"
          target="_blank"
          class="bg-white dark:bg-[#161b26] border border-slate-200 dark:border-[#282e39] p-5 rounded-xl hover:border-primary/40 transition-colors group cursor-pointer block"
        >
          <div class="flex justify-between items-start mb-3">
            <div class="flex items-center gap-2 min-w-0">
              <span class="material-symbols-outlined text-slate-400 text-lg shrink-0">folder</span>
              <h4 class="font-bold text-slate-900 dark:text-white group-hover:text-primary truncate">
                {{ r.name }}
              </h4>
            </div>

            <div class="flex items-center gap-1 text-slate-400 text-xs shrink-0">
              <span class="material-symbols-outlined text-sm text-yellow-500">star</span>
              {{ r.stargazers_count }}
            </div>
          </div>

          <p class="text-slate-600 dark:text-slate-400 text-xs line-clamp-2">
            {{ r.description || "Visit to explore the repo" }}
          </p>

          <div class="mt-4 flex items-center gap-3">
            <span class="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
              <span class="w-2 h-2 rounded-full bg-primary"></span>
              {{ r.language || "Code" }}
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>


  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";



const githubUsername = "vcwaleed";
const pinnedRepoNames = ["expense-tracker", "photohub", "quizzing"];

const activeFilter = ref("all");
const isLoading = ref(true);
const errorMsg = ref("");

const repos = ref([]);

const displayRepoCount = computed(() => "30+");

const customLanguages = [
  { name: "Vue", percent: 80, barClass: "bg-emerald-500" },
  { name: "JavaScript", percent: 90, barClass: "bg-yellow-400" },
  { name: "Python", percent: 70, barClass: "bg-sky-400" },
];

function prettyName(name) {
  return name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function buildTags(repo) {
  const tags = [];
  if (repo.language) tags.push(repo.language);
  return tags.slice(0, 3);
}

const featuredProjects = computed(() => {
  const map = new Map(repos.value.map((r) => [r.name, r]));
  return pinnedRepoNames
    .map((name) => map.get(name))
    .filter(Boolean)
    .map((r) => ({
      name: r.name,
      description: r.description,
      html_url: r.html_url,
      homepage: r.homepage,
      year: r.created_at ? new Date(r.created_at).getFullYear() : "—",
      tags: buildTags(r),
      type: (r.language || "").toLowerCase().includes("vue") ? "ui" : "web",
    }));
});

const pinnedRepos = computed(() => {
  const map = new Map(repos.value.map((r) => [r.name, r]));
  return pinnedRepoNames.map((n) => map.get(n)).filter(Boolean);
});

const weeks = 50;
const rows = 7;
const heatmap = ref([]);

function heatClass(level) {
  if (level === 0) return "bg-[#161b22]";
  if (level === 1) return "bg-[#0e4429]";
  if (level === 2) return "bg-[#006d32]";
  if (level === 3) return "bg-[#26a641]";
  return "bg-[#39d353]";
}

function makeGreenHeatmapFilled() {
  const total = weeks * rows;
  const levels = [0, 1, 2, 3, 4];
  const weights = [6, 18, 28, 28, 20];

  function pickLevel() {
    const r = Math.random() * 100;
    let acc = 0;
    for (let i = 0; i < levels.length; i++) {
      acc += weights[i];
      if (r <= acc) return levels[i];
    }
    return 2;
  }

  const arr = Array.from({ length: total }, pickLevel);
  for (let w = 0; w < weeks; w++) {
    const base = w * rows;
    arr[base + Math.floor(Math.random() * rows)] = 4;
    arr[base + Math.floor(Math.random() * rows)] = Math.max(arr[base + Math.floor(Math.random() * rows)], 3);
  }

  heatmap.value = arr;
}

async function fetchRepos() {
  try {
    errorMsg.value = "";
    const url = `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`;

    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (!res.ok) {
      errorMsg.value = `GitHub API error (${res.status}).`;
      return;
    }

    const data = await res.json();
    if (!Array.isArray(data)) {
      errorMsg.value = "Unexpected GitHub response.";
      return;
    }

    repos.value = data.filter((r) => !r.fork);
  } catch (e) {
    errorMsg.value = "Failed to load GitHub data (network/CORS).";
    console.error(e);
  } finally {
    isLoading.value = false;
  }
}

const liveProjects = [
  {
    title: "Al Rimal Lands",
    url: "https://al-rimal-lands.vercel.app/",
    description: "Real-estate landing & listings UI with a clean, modern layout.",
    tags: ["Web", "UI", "Vercel"],
    type: "web",
    year: "2025",
  },
  {
    title: "Riwaq Properties",
    url: "https://riwaq-properties.vercel.app/",
    description: "Property showcase website focused on conversion-first sections.",
    tags: ["Web", "Landing", "Vercel"],
    type: "web",
    year: "2025",
  },
  {
    title: "Al Noor Jewellery",
    url: "https://al-noor-jewellery.vercel.app/",
    description: "Jewellery catalog UI with elegant visuals and product sections.",
    tags: ["Web", "Ecommerce", "Vercel"],
    type: "web",
    year: "2025",
  },
  {
    title: "BookMyCure",
    url: "https://bookmycure.vercel.app/",
    description: "Healthcare booking UI with simple flow and modern styling.",
    tags: ["Web", "Booking", "Vercel"],
    type: "web",
    year: "2025",
  },
  {
    title: "NextLeap Digital",
    url: "https://www.nextleapdigital.online/",
    description: "Agency website with marketing sections, services and CTA layout.",
    tags: ["Web", "Agency", "Live"],
    type: "web",
    year: "2025",
  },
]

const filteredLiveProjects = computed(() => {
  if (activeFilter.value === "all") return liveProjects;
  return liveProjects.filter((p) => p.type === activeFilter.value);
});
const previewFailed = ref(new Set());

function markPreviewFailed(url) {
  const s = new Set(previewFailed.value);
  s.add(url);
  previewFailed.value = s;
}

onMounted(async () => {
  makeGreenHeatmapFilled();
  await fetchRepos();
});
</script>
