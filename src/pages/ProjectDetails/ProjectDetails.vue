<script lang="ts">
import {projectData} from "@/data/projects";
import {defineComponent} from "vue";

export default defineComponent({
  methods: {
    projectData() {
      return projectData;
    },
  },
});
</script>

<template>
  <div v-for="project in projectData()" :key="project.projectId">
    <div
        v-if="project.projectId.toString() === $route.params.id"
        class="mx-auto max-w-[1700px] text-white"
    >
      <div class="mb-8 md:mb-10">
        <h1 class="text-3xl font-bold tracking-tight sm:text-5xl md:text-7xl">
          {{ project.title }}
        </h1>
        <p class="mt-3 text-lg text-primary sm:text-2xl md:mt-4 md:text-3xl">
          {{ project.category }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-[1.55fr_.75fr] lg:gap-16">
        <div
            class="relative h-[280px] overflow-hidden rounded-2xl border border-primary/20 bg-[#111118] sm:h-[420px] sm:rounded-[34px] md:h-[520px] lg:h-[640px]"
        >
          <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,.18),transparent_70%)]"
          />
          <div
              class="absolute bottom-6 left-1/2 h-8 w-[70%] max-w-[430px] -translate-x-1/2 rounded-full bg-primary/60 blur-2xl opacity-70 sm:bottom-8 sm:h-10"
          />
          <img
              :src="project.image"
              :alt="project.title"
              class="absolute left-1/2 top-1/2 w-[55%] max-w-[470px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_35px_80px_rgba(124,58,237,.45)] transition duration-500 hover:scale-105 sm:w-[50%]"
          />
        </div>

        <div class="lg:pt-6">
          <h2 class="text-2xl font-semibold sm:text-4xl md:text-5xl">
            Overview
          </h2>
          <p class="mt-4 text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8 md:mt-8 md:text-[19px] md:leading-10">
            {{ project.description }}
          </p>

          <div class="my-8 border-t border-white/10 md:my-12"></div>

          <h2 class="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Tech Stack
          </h2>
          <div class="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-4">
            <span
                v-for="tech in project.techStack"
                :key="tech.title"
                class="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm backdrop-blur sm:px-5 sm:py-3"
            >
              {{ tech.title }}
            </span>
          </div>

          <div class="my-8 border-t border-white/10 md:my-12"></div>

          <h2 class="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Links
          </h2>
          <div class="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-6">
            <a
                class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-base transition hover:border-primary hover:bg-primary/10 sm:px-8 sm:py-4 sm:text-lg"
                :href="project.linkToCode"
                target="_blank"
                rel="noreferrer"
            >
              Source Code ↗
            </a>
            <button
                class="rounded-full border border-primary bg-primary/10 px-6 py-3.5 text-base shadow-[0_0_35px_rgba(124,58,237,.3)] transition hover:bg-primary/20 sm:px-8 sm:py-4 sm:text-lg"
            >
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
