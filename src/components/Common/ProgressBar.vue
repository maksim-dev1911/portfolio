<script>
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    progress: Array
  },
})

</script>

<template>
  <div class="w-full md:w-[500px] text-white mb-3" v-for="p in progress" :key='p.title'>
    <div class="flex items-center justify-between gap-4 mb-2">
      <h6
          class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal">
        {{ p.title }}
      </h6>
      <h6
          class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal">
        {{ p.percent }}%
      </h6>
    </div>
    <div
        class="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-[#e7e1fc] font-sans text-xs font-medium">
      <div :style="p.style"></div>
    </div>
  </div>
</template>

<style scoped>

</style>