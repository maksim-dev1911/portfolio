<script>

import {defineComponent} from "vue";

export default defineComponent({
  props: {
    text: String
  }
})

</script>

<template>
  <p
      class="
    text-primary
    uppercase
    text-sm
    font-semibold
    tracking-[0.35em]
    mb-4
  "
  >
    - {{ text }}
  </p>
</template>

<style scoped>

</style>