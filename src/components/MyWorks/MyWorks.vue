<template>
  <div class="md:grid grid-cols-3 gap-10">
    <div v-for="i in projectData()" class="mb-10 md:mb-0">
      <Work :work="i"/>
    </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Keyboard, Pagination, Navigation} from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

import Work from "@/components/MyWorks/Work.vue";
import {projectData} from "@/data/projects.ts";

export default defineComponent({
  components: {Work, Swiper, SwiperSlide},
  methods: {
    projectData() {
      return projectData
    }
  },
  setup() {
    return {
      modules: [Keyboard, Pagination, Navigation],
    };
  },
});
</script>

<style>
.swiper-button-next {
  color: #5E3BEE;
}

.swiper-button-prev {
  color: #5E3BEE;
}

.swiper-pagination-bullet {
  background-color: #5E3BEE;
}

</style>
