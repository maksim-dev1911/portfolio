<template>
  <div class="text-white">
    <Banner/>
    <div class="mt-14 sm:mt-20 md:mt-36 lg:mt-44">
      <TitleSection text="MY WORKS"/>
      <div class="mt-2">
        <MyWorks/>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import MyWorks from "@/components/MyWorks/MyWorks.vue";
import TitleSection from "@/components/Common/TitleSection.vue";
import Banner from "@/components/Home/Banner.vue";

export default defineComponent({
  components: {
    Banner,
    TitleSection,
    MyWorks,
  },
});
</script>
