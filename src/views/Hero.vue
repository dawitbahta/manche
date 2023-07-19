<template>
  <section class="items-center justify-center bg-secondary flex h-screen">
    <img class="h-full w-full absolute" src="../assets/shapes/shape-16.svg" alt="Bg Shape" />

    <div class="relative items-center h-full w-full px-2 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
      <div class="max-w-4xl mx-auto  flex flex-col justify-evenly h-full text-center">
        <div class="flex flex-col space-y-10 w-full justify-center"
        >
          <div class="font-semibold  text-6xl lg:text-8xl text-white ">Rigel <span class="text-primary">Studio
          </span></div>
          <p class="mt-8 text-xl font-semibold  text-yellow-50 lg:text-5xl w-full ">
            <span
                data-aos="fade-right"
                >
           Shaping Ethiopia's Today, Tommorow
            </span>
            <span class="md:block" data-aos="fade-out">With Technology for Everyone</span>
          </p>
          <p class="max-w-xl mx-auto mt-8 text-xs lg:text-xl font-light px-5 text-yellow-50">
            We are a software and services company that uses advanced technologies, data, and AI to help businesses transform and grow.
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
