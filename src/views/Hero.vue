<template>
  <section class="items-center justify-center bg-[#141521] flex h-screen">
    <img class="h-full w-full absolute" src="../assets/shapes/shape-16.svg" alt="Bg Shape" />

    <div class="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
      <div class="max-w-3xl mx-auto text-center">
        <div
        >
          <span class="w-auto px-6 py-3 rounded-full bg-white/5"><span class="text-sm font-medium text-green-500">Welcome to Rigel studio</span></span>
          <p class="mt-8 text-3xl font-extrabold tracking-tight text-white lg:text-6xl">
            <span
                data-aos="fade-right"
                >

              Create Your future
            </span>
            <span class="md:block">Make life simpler with technology </span>
          </p>
          <p class="max-w-xl mx-auto mt-8 text-base lg:text-xl text-slate-300">
            We’re a software and services company that builds and transforms businesses using advance technologies, data and AI
          </p>
        </div>
        <div class="flex flex-col justify-center max-w-sm gap-3 mx-auto mt-10 sm:flex-row">
          <a href="#about" class="text-white focus:outline-none inline-flex items-center justify-center rounded-xl hover:bg-green-500 duration-200 focus-visible:outline-black focus-visible:ring-black font-medium bg-transparent border hover:border-green-500 hover:text-white lg:w-auto px-6 py-3 text-center w-full">Who we are </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
AOS.init();


AOS.init({
  // Global settings:
  disable: false,
  duration: 1600,
  easing: 'ease-in-out-back'


});
</script>
