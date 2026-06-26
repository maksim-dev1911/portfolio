<script >
import AboutDescription from "@/components/About/AboutDescription.vue";
import AboutImage from "@/components/About/AboutImage.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {AboutImage, AboutDescription}
})

</script>

<template>
  <div class="lg:flex max-w-screen-3xl md:mx-auto px-4 xl:px-8 w-full">
    <AboutImage/>
    <AboutDescription/>
  </div>
</template>
