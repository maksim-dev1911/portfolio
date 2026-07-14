<template>
  <div class="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
    <Work
        v-for="(project, index) in projects"
        :key="project.projectId"
        :work="project"
        :index="index"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Work from "@/components/MyWorks/Work.vue";
import {projectData} from "@/data/projects";

export default defineComponent({
  components: {Work},
  setup() {
    return {projects: projectData};
  },
});
</script>
