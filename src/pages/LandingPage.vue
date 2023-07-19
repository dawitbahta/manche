<template>
  <main>
    <Hero id="home" ref="homeRef"></Hero>
    <About id="about" ref="aboutRef"></About>
    <Project id="projects" ref="projectsRef"></Project>
    <Team data-aos="fade-up" ref="teamRef"></Team>
    <Contact data-aos="fade-up" id="contact" ref="contactRef"></Contact>
  </main>
</template>

<script setup>
import Hero from "../views/Hero.vue";
import About from "../views/About.vue";
import Project from "../views/Project.vue";
import Team from "../views/Team.vue";
import Contact from "../views/Contact.vue";
import AOS from "aos";
import {nextTick, onBeforeUnmount, onMounted, ref} from "vue";
import {useNavBarStore} from "../store/navbar_store.js";

const navBarStore = useNavBarStore();

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
const aboutRef = ref(null);
const teamRef = ref(null);
const projectsRef = ref(null);
const contactRef = ref(null);

const handleScroll = () => {
  let scrollPosition = window.scrollY;

  let homePosition = homeRef.value.$el.offsetTop;
  let aboutPosition = aboutRef.value.$el.offsetTop;
  let teamPosition = teamRef.value.$el.offsetTop;
  let projectsPosition = projectsRef.value.$el.offsetTop;
  let contactPosition = contactRef.value.$el.offsetTop;

  if (scrollPosition >= homePosition && scrollPosition < aboutPosition) {
    navBarStore.setNavBarTheme('bg-secondary text-white', 'text-gray-300 fill-gray-300', 'text-primary')
     navBarStore.currentPage = 'home';
  } else if (scrollPosition >= aboutPosition && scrollPosition < projectsPosition) {
    navBarStore.setNavBarTheme('bg-gray-100 text-black', 'text-black fill-black', 'text-primary');
    navBarStore.currentPage = 'about';
  } else if (scrollPosition >= projectsPosition && scrollPosition < teamPosition) {
    navBarStore.setProjectsNavBarTheme();
    navBarStore.currentPage = 'projects';
  } else if (scrollPosition >= teamPosition && scrollPosition < contactPosition) {
    navBarStore.currentPage = 'team';
    navBarStore.setNavBarTheme('bg-gray-100', 'text-black fill-black', 'text-primary')
  }

  if (navBarStore.showMenu)
  navBarStore.setMenuTheme()
}
</script>

<style scoped>

</style>
