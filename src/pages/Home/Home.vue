<template>
  <div>
    <div class="">
      <p class="text-white text-3xl md:text-4xl max-w-3xl mt-4 font-bold">
        Programming is like building
        <span class="text-primary">sand castles</span>. Only locks sometimes
        break at sea, but the program never
        <span class="text-primary">does</span>.
      </p>
    </div>
    <div class="mt-32">
      <p class="text-gray-400 font-about tracking-wide text-xs">- MY WORKS</p>
      <MyWorks />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyWorks from "@/components/MyWorks/MyWorks.vue";

export default defineComponent({
  components: {
    MyWorks,
  },
});
</script>
