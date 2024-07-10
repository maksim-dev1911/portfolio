<template>
  <div class="font-poppins md:flex justify-between md:mb-32 py-12">
    <RouterLink to="/home" class="flex">
      <p class="text-white font-bold text-2xl">Shve</p>
      <p class="text-primary font-bold text-2xl">tso</p>
      <p class="text-white font-bold text-2xl">v.</p>
    </RouterLink>
    <div class="flex gap-9">
      <div v-for="l in links" v-bind:key="l.title" class="flex text-white">
        <RouterLink
          active-class="border-b-2 border-primary text-primary"
          :to="l.link"
          >{{ l.title }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  components: {},
  data() {
    return {
      links: [
        { link: "/home", title: "Home" },
        { link: "/about", title: "About me" },
        { link: "/contact", title: "Contact me" },
      ],
    };
  },
});
</script>
