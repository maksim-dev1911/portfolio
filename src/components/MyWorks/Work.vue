<template>
  <div class="border-[1px] border-gray-700 rounded-xl text-white text-center">
    <div class="flex justify-center mt-16">
      <img class="w-[50%]" :src="work.iconImage"/>
    </div>
    <p class="text-3xl font-poppins mt-12">{{ work.title }}</p>
    <p class="text-[17px] text-gray-600 mt-3 px-4 leading-[26px]">Lorem Ipsum - это текст-"рыба", часто используемый в печати и
      вэб-дизайне. Lorem Ipsum является стандартной
      "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую
      коллекцию размеров и</p>
    <div class="border-t-[1px] border-gray-700 mt-14">
      <button class="my-4 font-poppins items-center transition ease-in-out delay-150 hover:scale-110" @click="redirectProject(work.projectId)">Learn More
        <font-awesome-icon icon="arrow-right" style="color: #5e3bee;" size="lg" class="ml-1"/>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import type {PropType} from "vue";
import router from "@/router";
import route from "@/config/route";
import type {IProject} from "@/interfaces/projects";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default defineComponent({
  components: {FontAwesomeIcon},
  props: {
    work: {type: Object as PropType<IProject>, required: true}
  },
  setup() {
    function redirectProject(projectId: any) {
      router.push(route.HOME_PROJECT.replace(':id', projectId))
    }

    return {redirectProject}
  }
});
</script>
