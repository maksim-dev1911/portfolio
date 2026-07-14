<template>
  <header class="relative z-50 font-poppins mb-10 pt-6 md:mb-16 md:pt-10">
    <div class="flex items-center justify-between">
      <RouterLink to="/home" class="flex text-2xl font-bold" @click="closeMenu">
        <span class="text-white">Shve</span>
        <span class="text-primary">tso</span>
        <span class="text-white">v.</span>
      </RouterLink>

      <nav class="hidden items-center gap-9 md:flex">
        <RouterLink
            v-for="l in links"
            :key="l.title"
            :to="l.link"
            active-class="border-b-2 border-primary text-primary"
            class="text-white transition hover:text-primary"
        >
          {{ l.title }}
        </RouterLink>
      </nav>

      <button
          type="button"
          class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
          aria-label="Toggle menu"
          @click="menuOpen"
      >
        <font-awesome-icon
            :icon="open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
            size="lg"
            style="color: #5e3bee"
        />
      </button>
    </div>

    <Transition name="menu">
      <nav
          v-if="open"
          class="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#15151C] p-3 shadow-[0_20px_60px_rgba(0,0,0,.45)] md:hidden"
      >
        <RouterLink
            v-for="l in links"
            :key="l.title"
            :to="l.link"
            active-class="bg-primary/15 text-primary"
            class="mb-1 block rounded-xl px-4 py-3.5 text-base text-white last:mb-0 transition hover:bg-white/5"
            @click="closeMenu"
        >
          {{ l.title }}
        </RouterLink>
      </nav>
    </Transition>
  </header>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from "vue";
import {useRoute} from "vue-router";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import routes from "@/config/route";

export default defineComponent({
  name: "Header",
  components: {FontAwesomeIcon},
  setup() {
    const route = useRoute();
    const open = ref(false);

    const links = [
      {link: routes.HOME, title: "Home"},
      {link: routes.ABOUT, title: "About me"},
      {link: routes.CONTACT, title: "Contact me"},
    ];

    function menuOpen() {
      open.value = !open.value;
    }

    function closeMenu() {
      open.value = false;
    }

    watch(
        () => route.fullPath,
        () => closeMenu()
    );

    return {open, links, menuOpen, closeMenu};
  },
});
</script>

<style scoped>

</style>
