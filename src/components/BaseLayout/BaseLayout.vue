<template>
  <Header/>
  <RouterView />
  <Footer/>
</template>

<script lang="ts">
import Footer from "@/components/BaseLayout/Footer/Footer.vue";
import Header from "@/components/BaseLayout/Header/Header.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {Header, Footer}
})

</script>
