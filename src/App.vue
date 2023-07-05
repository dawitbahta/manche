<template>
  <Navbar class="pb-9"></Navbar>
  <main>
    <Hero id="home"></Hero>
    <About id="about"></About>
    <Team data-aos="fade-up"></Team>
    <Project id="projects"></Project>
    <Contact data-aos="fade-up" id="contact"></Contact>
  </main>
  <Footer></Footer>

</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./views/Hero.vue";
import About from "./views/About.vue";
import Project from "./views/Project.vue";
import Team from "./views/Team.vue";
import Contact from "./views/Contact.vue";
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
