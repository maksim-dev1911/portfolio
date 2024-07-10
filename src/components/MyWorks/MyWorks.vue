<template>
  <div class="mt-12 font-poppins">
    <div class="text-white md:flex">
      <img
        src="../../assets/social-network.jpg"
        class="md:max-w-[45%] max-h-[450px] rounded-2xl"
      />
      <div class="mt-12 md:mt-24 md:ml-6">
        <p class="text-xl font-poppins">Social Network</p>
        <p class="mt-2 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          <span class="text-white font-bold"
            >text ever since the 1500s, when an unknown printer took a
            galley</span
          >
        </p>
        <p class="mt-4 text-[#E3E4E6] text-xs">Website Design</p>
        <button
          class="flex items-center mt-4 font-light border border-gray-600 text-[#E3E4E6] px-2 py-1 rounded-[20px] text-[13px] transition ease-in-out delay-100 duration-300 hover:bg-primary"
        >
          VIEW WORK
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-1"
            height="15"
            width="20"
            viewBox="0 0 448 512"
          >
            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              fill="#E3E4E6"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </button>
      </div>
    </div>

    <Work
      title="Social Network"
      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
      selected-text="text ever since the 1500s, when an unknown printer took a galley"
      description="Website Design"
      src="social-network.jpg"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Work from "@/components/MyWorks/Work.vue";

export default defineComponent({
  components: {
    Work,
  },
});
</script>
