<template>
  <footer class="mt-16 flex flex-col items-center gap-4 pb-8 text-zinc-400 sm:mt-24 md:mt-32 md:flex-row md:justify-between md:pb-9">
    <div class="flex items-center gap-3">
      <div v-for="(s, index) in social" :key="index" class="flex items-center gap-3">
        <a
            :href="s.href"
            class="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            target="_blank"
            rel="noreferrer"
        >
          <img :src="s.image" alt="social" class="h-5 w-5">
        </a>
        <div v-if="s.point" class="h-[3px] w-[3px] rounded-full bg-primary"></div>
      </div>
    </div>
    <p class="text-[13px]">© {{ realYears }} Maksim Shvetsov</p>
  </footer>
</template>

<script>
import {defineComponent} from "vue";
import telegramImg from "../../../assets/telegram.png";
import instagramImg from "../../../assets/instagram.png";
import linkedin from "../../../assets/linkedin.png";

export default defineComponent({
  data() {
    return {
      social: [
        {href: "https://t.me/maks_shvetsov", image: telegramImg, point: true},
        {href: "https://www.instagram.com/maks.shvetsov__/", image: instagramImg, point: true},
        {href: "https://t.me/maks_shvetsov", image: linkedin, point: false},
      ],
    };
  },
  setup() {
    const realYears = new Date().getFullYear();
    return {realYears};
  },
});
</script>
