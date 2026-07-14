<template>
  <div class="w-full max-w-2xl">
    <TitleSection text="ABOUT ME"/>

    <h1 class="flex items-center gap-3 mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
      <span class="text-white">Maxim</span>
      <span class="text-primary">Shvetsov</span>
    </h1>

    <p class="mt-6 text-base leading-7 text-zinc-300 sm:mt-8 sm:text-lg sm:leading-8">
      Frontend Developer passionate about building modern, responsive, and
      user-friendly web applications. I enjoy transforming ideas into clean,
      scalable, and interactive interfaces with a strong focus on performance
      and user experience.
    </p>
    <p class="mt-4 text-base leading-7 text-zinc-300 sm:mt-5 sm:text-lg sm:leading-8">
      Experienced with React, Vue, TypeScript, Redux Toolkit, Tailwind CSS,
      REST APIs, and modern frontend tooling. Always eager to learn new
      technologies and contribute to meaningful projects.
    </p>

    <div class="mt-10 sm:mt-14">
      <TitleSection text="TECH STACK"/>
      <div class="mt-5 flex flex-wrap gap-2 sm:gap-3">
        <span
            v-for="tech in techStack"
            :key="tech"
            class="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-zinc-300 sm:px-5 sm:py-3"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <a
        href="https://docs.google.com/document/d/19d5Lz_a14d7Eizjam3HddP9zbMEiSLi0z292Y9a0-bQ/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
        class="mt-8 inline-flex sm:mt-10"
    >
      <span
          class="rounded-2xl border border-white/10 bg-[#15151C] px-8 py-4 text-[14px] font-medium uppercase tracking-[0.15em] text-white transition hover:border-primary hover:bg-primary"
      >
        View CV
      </span>
    </a>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TitleSection from "@/components/Common/TitleSection.vue";

export default defineComponent({
  components: {TitleSection},
  setup() {
    const techStack = [
      "⚛️ React",
      "💚 Vue",
      "🔷 TypeScript",
      "🟨 JavaScript",
      "🟦 Redux Toolkit",
      "🔌 WebSocket",
      "🧭 React Router",
      "📨 Axios",
      "🎨 Tailwind CSS",
      "⚡ Vite",
      "🌐 REST API",
      "🌿 Git",
    ];

    return {techStack};
  },
});
</script>
