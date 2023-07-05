<template>
<div class="h-auto pt-1 pb-10 ">
  <section data-aos="fade-up" aria-labelledby="feature-five" id="feature-five" class="overflow-y-auto bg-white lg:h-screen">
    <div class="px-8 py-24 mx-auto lg:px-16 max-w-7xl md:px-12 xl:px-36 lg:flex">
      <div class="lg:w-1/2">
        <div class="top-0 pt-8 pb-16 lg:sticky">
          <div>
            <div class="lg:pr-24 md:pr-12">
              <div>
                <p class="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                 Who are we ?
                </p>
                <p class="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                  We are a reputable provider of cutting-edge solutions, specializing in digital transformation, product development, data analytics & AI, and delivering exceptional customer support. Our focus is on delivering excellence across all our services.
                </p>
              </div>
              <div class="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                <a href="#contact" class="items-center justify-center w-full px-6 py-2.5 text-center duration-200 bg-green-500 rounded-full inline-flex hover:bg-green-500 bg-transparent border-2 text-green-500 border-green-500 hover:text-white font-medium focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2">
        <div class="flex-shrink-0">
          <div>
            <ul class="grid grid-cols-1 gap-12 mt-6 list-none lg:mt-0 lg:gap-24" role="list">
              <li v-for="(specialization,index) in specializations" :key="index">
                <div>
                  <div class="flex items-center justify-center w-12 h-12  rounded-xl">
                    <img :src="specialization.imageSrc">
                  </div>
                  <p class="mt-5 text-lg font-medium leading-6 text-black">
                    {{specialization.title}}
                  </p>
                </div>
                <div class="mt-2 text-base text-gray-500">
                  {{specialization.description}}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script setup>
import AOS from "aos";
import {onMounted} from "vue";
import dataTransformation from "../assets/icons/data-transformation.png";
import customerService from "../assets/icons/customer-service.png";
import productDevelopment from "../assets/icons/productDevelopment.png";
import ai from "../assets/icons/ai.png";
onMounted(() => {
  AOS.init({
    duration: 1000,
  });
})

const specializations =[
  {
    imageSrc:dataTransformation,
    title:"Digital Transformation",
    description:"At our core, we assist enterprises in navigating the intricate realm of digital transformation, enabling them to unearth fresh avenues for growth and success. With our expertise, we empower businesses to conquer the challenges they face and seize the full potential of the digital landscape, propelling their evolution forward."
  },
  {
    imageSrc:productDevelopment,
    title:"Product Development",
    description:"Harnessing our profound expertise in product design and development, we possess the ability to metamorphose conceptual ideas into triumphant products. With our unwavering dedication and comprehensive knowledge, we cultivate innovation and seamlessly translate visions into tangible realities, driving product success and delivering exceptional user experiences."
  },
  {
    imageSrc:ai,
    title:"Data Analytics & AI",
    description:"Staying at the forefront of data analytics and AI, we proactively embrace the cutting-edge technologies to extract profound insights that drive meaningful intelligence. By constantly evolving our strategies and leveraging the latest advancements, we empower organizations to unlock the hidden potential within their data, enabling informed decision-making and gaining a competitive edge in today's data-driven landscape."
  },
  {
    imageSrc:customerService,
    title:"Customer support",
    description:"We prioritize customer satisfaction through reliable and responsive support services. Our customer-centric approach ensures swift issue resolution, exceeding expectations, and fostering long-lasting relationships built on trust and exceptional service delivery."
  }
]
</script>

<style scoped>
/* Customize scrollbar styles */
::-webkit-scrollbar {
  width: 1px;
  height: 3px;
  background: white;

}
::-webkit-scrollbar-thumb {
  background-color: #a0aec0;
}
</style>
