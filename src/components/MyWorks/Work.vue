<template>
  <article
      tabindex="0"
      @click="redirectProject(work.projectId)"
      @keydown.enter="redirectProject(work.projectId)"
      class="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111118] text-white transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_25px_60px_rgba(94,59,238,.2)] sm:rounded-[28px]"
  >
    <div
        class="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(94,59,238,.22),transparent_65%)]"
    />

    <div class="relative z-10 flex items-start justify-between gap-3 p-5 pb-0 sm:p-7 sm:pb-0">
      <span class="font-poppins text-xs font-medium tracking-[0.2em] text-zinc-500 sm:text-sm">
        {{ paddedIndex }}
      </span>
      <span
          class="max-w-[70%] truncate rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-zinc-300 backdrop-blur transition group-hover:border-primary/40 group-hover:text-primary sm:max-w-none sm:px-3 sm:text-xs"
      >
        {{ work.category }}
      </span>
    </div>

    <div class="relative z-10 px-5 pt-4 sm:px-7 sm:pt-5">
      <h2 class="font-poppins text-2xl font-semibold leading-tight transition group-hover:text-primary sm:text-3xl md:text-4xl">
        {{ work.title }}
      </h2>
      <div class="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
        <span
            v-for="tech in previewStack"
            :key="tech.title"
            class="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-zinc-400 sm:px-3 sm:text-xs"
        >
          {{ tech.title }}
        </span>
      </div>
    </div>

    <div class="relative z-10 mt-4 flex flex-1 items-end justify-center overflow-hidden px-4 pb-1 sm:mt-6 sm:px-6 sm:pb-2">
      <div
          class="absolute bottom-4 h-16 w-40 rounded-full bg-primary/25 blur-3xl transition duration-500 group-hover:bg-primary/40 sm:bottom-6 sm:h-20 sm:w-56"
      />
      <img
          :src="work.image"
          :alt="work.title"
          class="relative max-h-[220px] w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,.45)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.04] sm:max-h-[300px] md:max-h-[340px]"
      />
      <div
          class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111118] to-transparent sm:h-24"
      />
    </div>

    <div class="relative z-10 flex items-center justify-between border-t border-white/5 px-5 py-4 sm:px-7 sm:py-5">
      <span class="text-sm font-medium text-zinc-400 transition group-hover:text-white">
        View Project
      </span>
      <span
          class="flex h-9 w-9 items-center justify-center rounded-full bg-primary/90 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:bg-primary sm:h-10 sm:w-10"
      >
        <font-awesome-icon icon="arrow-right"/>
      </span>
    </div>
  </article>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import type {PropType} from "vue";
import router from "@/router";
import route from "@/config/route";
import type {IProject} from "@/interfaces/projects";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default defineComponent({
  components: {FontAwesomeIcon},
  props: {
    work: {type: Object as PropType<IProject>, required: true},
    index: {type: Number, default: 0},
  },
  setup(props) {
    const paddedIndex = computed(() =>
        String(props.index + 1).padStart(2, "0")
    );

    const previewStack = computed(() => props.work.techStack.slice(0, 3));

    function redirectProject(projectId: number) {
      router.push(route.HOME_PROJECT.replace(":id", String(projectId)));
    }

    return {redirectProject, paddedIndex, previewStack};
  },
});
</script>
