<script>

import {defineComponent} from "vue";

export default defineComponent({
  props: {
    text: String
  }
})

</script>

<template>
  <p class="text-gray-400 font-about tracking-wide text-xs mb-6">- {{ text }}</p>
</template>

<style scoped>

</style>