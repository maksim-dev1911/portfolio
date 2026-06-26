<template>
    <div class="text-white">
      <Banner/>
      <div class="mt-20 md:mt-52">
        <TitleSection text="MY WORKS"/>
        <MyWorks/>
      </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import MyWorks from "@/components/MyWorks/MyWorks.vue";
import Progress from "@/components/Home/Progress.vue";
import TitleSection from "@/components/Common/TitleSection.vue";
import Banner from "@/components/Home/Banner.vue";

export default defineComponent({
  components: {
    Banner,
    TitleSection,
    Progress,
    MyWorks,
  },
});
</script>
