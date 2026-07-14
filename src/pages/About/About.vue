<script>
import AboutDescription from "@/components/About/AboutDescription.vue";
import AboutImage from "@/components/About/AboutImage.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {AboutImage, AboutDescription},
});
</script>

<template>
  <section class="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-20">
    <AboutImage/>
    <AboutDescription/>
  </section>
</template>
