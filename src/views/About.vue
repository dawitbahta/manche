<template>
<div class="h-auto pt-1 pb-10 bg-gray-100">
  <section data-aos="fade-up" aria-labelledby="feature-five" id="feature-five" class="overflow-y-auto bg-gray-100 lg:h-screen">
    <div class="px-8 py-8 md:py-24 mx-auto  lg:px-16 max-w-7xl md:px-12 xl:px-36 lg:flex">

        <div class="top-0 lg:pt-8 lg:w-1/2 pb-16 lg:sticky">
            <div class="lg:pr-24 md:pr-12">
              <div>
                <p class="text-3xl font-medium font-lexend tracking-tight text-black sm:text-4xl">
                  The Manche Mindset
                </p>

                <div class="flex flex-col space-y-3 max-w-xl mt-4 md:text-lg tracking-tight text-gray-600">

                <p class="">
                  We are visionaries and innovators who believe that technology can shape Ethiopia's future.</p>
                <p>We are a team driven by our shared vision of an Ethiopia where technology facilitates progress, transparency and prosperity for all.
                  
                </p>

                <p>
                  We are relentless in our pursuit of excellence, yet flexible in our approach.
                  We listen first, then innovate. Understanding people's needs is the foundation on which we build the future.
                </p>

                <p>We are Manche Studio - rooted in Ethiopia, soaring to the stars, and always pushing the boundaries of what is possible.</p>

                </div>
              </div>
              <div class="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                <a href="#contact" class="items-center justify-center w-full px-6 py-2.5 text-center duration-200 rounded-full inline-flex bg-primary  border-2 text-white border-primary hover:text-white font-medium focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                  Contact
                </a>
              </div>
            </div>
      </div>
      <div class="lg:w-1/2">
        <div class="flex-shrink-0">
          <div>
            <ul class="grid grid-cols-1 gap-12 mt-6 list-none lg:mt-0 lg:gap-24" role="list">
              <li v-for="(specialization,index) in specializations" :key="index">
                <div>
                  <div class="flex items-center space-x-4 rounded-xl">
                    <img :src="specialization.imageSrc" class="w-10">
                    <p class="text-lg font-medium font-lexend leading-6 text-black">
                      {{specialization.title}}
                    </p>
                  </div>

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
    description:"We guide enterprises on the journey of digital transformation, empowering them to evolve and unlock new opportunities for growth. Our expertise enables organizations to overcome obstacles and capitalize on emerging possibilities in the digital landscape. We propel progress through technology."
  },
  {
    imageSrc:productDevelopment,
    title:"Product Development",
    description:"We transform visions into realities, seamlessly guiding ideas from conception to finished product. With profound expertise and unwavering dedication, we cultivate innovation at every step. Our comprehensive knowledge enables us to morph concepts into triumphs, driving product success and exceptional user experiences. We harness the full power of technology to make the intangible tangible."
  },
  {
    imageSrc:ai,
    title:"Data Analytics & AI",
    description:"Staying at the forefront of data analytics and AI, we embrace cutting-edge technologies to extract profound insights and drive meaningful intelligence. Through constantly evolving strategies leveraging the latest advancements, we empower organizations to unlock hidden potential within their data. This enables informed decision-making and a competitive edge in today's data-driven landscape."
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
