<template>
  <div class="flex flex-1 flex-col items-center justify-center px-1 py-12 text-center text-white sm:py-16 md:py-28">
    <TitleSection text="CONTACT"/>
    <h1 class="mt-4 max-w-2xl font-poppins text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
      Let's build something together
    </h1>
    <p class="mt-5 max-w-md text-base text-zinc-400 sm:mt-6 sm:text-lg">
      Drop me a line — I usually reply within a day.
    </p>
    <a
        href="mailto:mshvetsov68@gmail.com"
        class="group mt-10 inline-flex max-w-full items-center gap-2 break-all rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-base font-medium text-primary transition hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_40px_rgba(94,59,238,.25)] sm:mt-12 sm:gap-3 sm:px-8 sm:py-4 sm:text-lg md:text-2xl"
    >
      mshvetsov68@gmail.com
      <font-awesome-icon
          icon="arrow-right"
          class="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TitleSection from "@/components/Common/TitleSection.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default defineComponent({
  components: {TitleSection, FontAwesomeIcon},
});
</script>
