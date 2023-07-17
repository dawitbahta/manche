<template>
  <main>
    <router-view></router-view>
    <Hero id="home" ref="home"></Hero>
    <About id="about" ref="about"></About>
    <Project id="projects" ref="projects"></Project>
    <Team data-aos="fade-up" ref="team"></Team>
    <Contact data-aos="fade-up" id="contact" ref="contact"></Contact>
  </main>
</template>

<script setup>
import Hero from "../views/Hero.vue";
import About from "../views/About.vue";
import Project from "../views/Project.vue";
import Team from "../views/Team.vue";
import Contact from "../views/Contact.vue";

import AOS from "aos";
import {computed, nextTick, onBeforeUnmount, onMounted, ref} from "vue";
onMounted(() => {
  AOS.init({
  });

  nextTick(() => {
    window.addEventListener('scroll', handleScroll)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const homeRef = ref(null)
const home = computed(() => homeRef.value)
const about = ref(null);
const team = ref(null);
const projects = ref(null);
const contact = ref(null);

const handleScroll = () => {
  let scrollPosition = window.scrollY;

  let homePosition = home.value?.offsetTop;
  let aboutPosition = about.value?.offsetTop;
  let teamPosition = team.value?.offsetTop;
  let projectsPosition = projects.value?.offsetTop;
  let contactPosition = contact.value?.offsetTop;
  console.log("Positions: ", {homePosition, aboutPosition, teamPosition, projectsPosition, contactPosition});

  let color;
  if (scrollPosition >= homePosition && scrollPosition < aboutPosition) {

    color = 'red';

  } else if (scrollPosition >= aboutPosition && scrollPosition < teamPosition) {
    color = 'blue';
  } else if (scrollPosition >= teamPosition && scrollPosition < projectsPosition) {
    color = 'green';
  } else if (scrollPosition >= projectsPosition && scrollPosition < contactPosition) {
    color = 'yellow';
  } else if (scrollPosition >= contactPosition) {
    color = 'purple';
  }
  console.log(color);
}
</script>

<style scoped>

</style>
