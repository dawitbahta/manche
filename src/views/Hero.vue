<template>
  <section class="items-center justify-center bg-secondary flex h-screen">
    <img class="h-full w-full absolute" src="../assets/shapes/shape-16.svg" alt="Bg Shape" />

    <div class="relative items-center h-full w-full px-2 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
      <div class="max-w-4xl mx-auto  flex flex-col justify-evenly h-full text-center">
        <div class="flex flex-col items-center space-y-10 w-full justify-center"
        >
          <div class="font-semibold text-5xl w-11/12 tracking-wide leading-tight lg:text-8xl text-gray-50">Driving Ethiopia's  <span class="text-primary md:block">Digital Future</span></div>

<!--          Mobile version-->
          <p class="lg:hidden text-gray-50 text-xl w-11/12">
            With creativity and technology, we craft software solutions that redefine possibilities. Join us in forging a digital
           <span class="bg-[#D6DEE7] text-black font-bold px-3 py-0.5 skew-x-5">
             ETHIOPIA!</span>
          </p>

<!--          Desktop version-->
          <p class="max-w-xl mx-auto mt-8 text-2xl font-light text-gray-50 hidden md:inline-block">
            At Rigel, we blend innovation and technology to craft software solutions that catalyze growth and drive progress. Join us on this digital journey to transform ideas into realities and create a technologically empowered
            <span class="bg-[#D6DEE7] text-black font-bold px-3 py-0.5 skew-x-5">
             ETHIOPIA!</span>
          </p>
        </div>
        <div class="flex flex-col justify-center  gap-3 mx-auto w-10/12  mt-10 sm:flex-row">
          <a href="#about" class=" focus:outline-none inline-flex items-center font-semibold justify-center rounded-3xl bg-primary text-white duration-200 lg:w-3/12 px-6 py-3 text-center w-full">Why Rigel?</a>
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
});
</script>
