<script>
import ProgressBar from "@/components/Common/ProgressBar.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {ProgressBar},
  setup() {
    return {
      progress: [
        {title: "HTML 5", percent: '85', style: 'width: 85%; background-color: #5E3BEE;'},
        {title: "CSS 3", percent: '85', style: 'width: 85%; background-color: #5E3BEE;'},
        {title: "JavaScript", percent: '70', style: 'width: 70%; background-color: #5E3BEE;'},
        {title: "React", percent: '70', style: 'width: 70%; background-color: #5E3BEE;'},
        {title: "VueJS", percent: '50', style: 'width: 50%; background-color: #5E3BEE;'},
        {title: "NextJS", percent: '50', style: 'width: 50%; background-color: #5E3BEE;'},
      ]
    }
  }
})

</script>

<template>
  <div class="mt-8 flex flex-wrap gap-4">
            <span v-for="tech in progress"
                  :key="tech.title"
                  class="rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
              {{ tech.title }}
            </span>
  </div>
</template>

<style scoped>

</style>