<template>
  <Navbar></Navbar>
  <main>
    <router-view></router-view>
  </main>
  <Footer></Footer>

</template>

<script setup>
import Navbar from "./components/Navbar.vue";

import Footer from "./components/Footer.vue";

import AOS from "aos";
import {onMounted} from "vue";
onMounted(() => {
  AOS.init({
  });

})
</script>

<style scoped>

</style>
