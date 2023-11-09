<template>
  <Hero></Hero>
  <Feature></Feature>
  <Contact id="contact"></Contact>
</template>

<script setup>
import Hero from '../views/SMS/Hero.vue';
import Feature from '../views/SMS/Feature.vue';
import Contact from "../views/SMS/Contact.vue";
import {onMounted} from "vue";
import {useNavBarStore} from "../store/navbar_store.js";

const navBarStore = useNavBarStore();
onMounted(() => {
  navBarStore.setNavBarTheme('bg-purple-600 text-purple-50', 'text-purple-50 fill-purple-50', 'text-amber-400');

})
</script>
<style scoped>
</style>