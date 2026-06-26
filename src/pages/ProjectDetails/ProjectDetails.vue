<script lang="ts">
import {projectData} from "@/data/projects";
import {defineComponent} from "vue";

export default defineComponent({
  components: {},
  methods: {
    projectData() {
      return projectData
    },
  },
})
</script>

<template>
  <div v-for="i in projectData()">
    <div v-if="i.projectId.toString() === $route.params.id" class="text-white">
      <div>
        <p class="text-4xl font-poppins">{{ i.title }}</p>
        <p class="text-2xl text-gray-600 mt-2">{{ i.framework }}</p>
      </div>
      <div class="md:flex gap-10 mt-16">
        <img class="md:w-[60%] h-[500px] object-cover" width="800" height="500" :src="i.image">
        <div class="mt-8 md:w-[30%] md:mt-0">
          <p class="font-poppins text-xl mt-2 font-bold">Overview</p>
          <p class="text-gray-600 mt-2 leading-[26px]">Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время
            некий безымянный печатник создал большую коллекцию размеров и</p>
          <div class="flex items-center mt-10 gap-2">
            <p class="font-poppins text-[17px]">Links</p>
            <button class="text-gray-600 text-[15px] transition-all hover:text-primary">- Code</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>