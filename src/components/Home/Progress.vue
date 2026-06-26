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
  <div>
    <ProgressBar :progress="progress"/>
  </div>
</template>

<style scoped>

</style>