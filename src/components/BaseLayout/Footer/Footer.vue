<template>
  <div class="mt-32 text-gray-600 pb-9 flex justify-between">
    <div class="flex items-center gap-3">
      <div v-for="s in social">
        <div class="flex items-center gap-3">
          <a
              :href="s.href"
              class="text-[14px] transition ease-in-out hover:-translate-y-1 hover:scale-110 hover: duration-300"
              target="_blank"
              rel="noreferrer">
            <img :src="s.image" alt="telegram" class="h-[20px] w-[20px]">
          </a>
          <div v-if="s.point" class="after:content-* w-[3px] h-[3px] bg-primary rounded-[50%]"></div>
        </div>
      </div>
    </div>
    <div>
      <p class="text-[13px]">© 2024 Maksim Shvetsov</p>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import telegramImg from "../../../assets/telegram.png"
import instagramImg from "../../../assets/instagram.png"
import linkedin from "../../../assets/linkedin.png"

export default defineComponent({
  components: {},
  data() {
    return {
      social: [
        {href: 'https://t.me/maks_shvetsov', image: telegramImg, point: true},
        {href: 'https://www.instagram.com/maks.shvetsov__/', image: instagramImg, point: true},
        {href: 'https://t.me/maks_shvetsov', image: linkedin, point: false}
      ]
    }
  }
})
</script>

