<template>
  <div class="flex flex-col min-h-[100vh]">
    <Header/>
    <main class="grow flex flex-col">
      <RouterView/>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Footer from "@/components/BaseLayout/Footer/Footer.vue";
import Header from "@/components/BaseLayout/Header/Header.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {Header, Footer}
})

</script>
