<template>
  <div class="font-poppins pt-8 mb-20 md:flex justify-between md:py-10">
    <div class="flex justify-between items-center">
      <RouterLink to="/home" class="flex">
        <p class="text-white font-bold text-2xl">Shve</p>
        <p class="text-primary font-bold text-2xl">tso</p>
        <p class="text-white font-bold text-2xl">v.</p>
      </RouterLink>
      <div class="md:hidden">
        <font-awesome-icon @click="menuOpen()" v-if="!open" size="lg" icon="fa-solid fa-bars" style="color: #5e3bee;"
                           class=""/>
        <font-awesome-icon @click="menuOpen()" v-if="open" size="xl" icon="fa-solid fa-xmark" style="color: #5e3bee;"
                           class=""/>
      </div>
    </div>
    <div class="mt-8 absolute top-14 md:flex gap-9 md:static" :class="[open ? 'block' : 'hidden']">
      <div v-for="l in links" v-bind:key="l.title" class="mb-2 last:mb-0 flex text-white">
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
import {defineComponent, ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import routes from "@/config/route";

export default defineComponent({
  name: "Header",
  components: {FontAwesomeIcon},
  data() {
    return {
      links: [
        {link: routes.HOME, title: "Home"},
        {link: routes.ABOUT, title: "About me"},
        {link: routes.CONTACT, title: "Contact me"},
      ],
    };
  },
  setup() {
    let open = ref(true)

    function menuOpen() {
      open.value = !open.value
    }

    return {open, menuOpen}
  }
});
</script>
