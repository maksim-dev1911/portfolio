<script >

import TitleSection from "@/components/Common/TitleSection.vue";
import {defineComponent} from "vue";
import Progress from "@/components/Home/Progress.vue";

export default defineComponent({
  components: {Progress, TitleSection}
})
</script>

<template>
  <div class="mt-12 lg:ml-24">
    <TitleSection text="ABOUT"/>
    <div class="flex text-3xl sm:text-5xl gap-2 font-bold mt-3">
      <p class="text-white">Maksim</p>
      <p class="text-primary">Shvetsov</p>
    </div>
    <div class="text-gray-600 mt-2 text-[17px]">
      <p class="my-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and
        more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum
      </p>
      <p class="my-4">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old.
      </p>
      <p>
        There are many variations of passages of Lorem Ipsum available, but
        the majority have suffered alteration in some form, by injected
        humour, or randomised words which don't look even slightly believable.
      </p>
      <div class="mt-12">
        <TitleSection text="SKILLS"/>
        <Progress/>
      </div>
      <a href="">
        <button
            class="mt-8 select-none border border-white py-3 px-6 text-center transition-all align-middle font-sans text-xs text-white hover:bg-white hover:text-black">
          VIEW CV
        </button>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>