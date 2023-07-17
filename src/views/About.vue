<template>
<div class="h-auto pt-1 pb-10 bg-[#EEEEEE] ">
  <section data-aos="fade-up" aria-labelledby="feature-five" id="feature-five" class="overflow-y-auto bg-[#EEEEEE] lg:h-screen">
    <div class="px-8 py-24 mx-auto  lg:px-16 max-w-7xl md:px-12 xl:px-36 lg:flex">
      <div class="lg:w-1/2">
        <div class="top-0 pt-8 pb-16 lg:sticky">
          <div>
            <div class="lg:pr-24 md:pr-12">
              <div>
                <p class="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                  The Rigel Mindset
                </p>

                <div class="flex flex-col space-y-3 max-w-xl mt-4 text-lg tracking-tight text-gray-600">

                <p class="">
                  We are dreamers and doers who believe technology can transform Ethiopia's future.</p>
                <p>We are a team driven by our shared vision of an Ethiopia where technology facilitates progress, transparency and prosperity for all.
                  Our solutions pave new pathways so ideas can become reality. We forge ahead step-by-step, but with giant leaps in mind.
                </p>

                <p>
                  We are relentless in our pursuit of excellence, yet flexible in our approach.
                  We listen first, then innovate. Understanding people's needs is the foundation on which we build the future.
                </p>

                <p>We are Rigel Studio - proudly Ethiopian, unmistakably modern, and ready to shape tomorrow, today. </p>

                </div>
              </div>
              <div class="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                <a href="#contact" class="items-center justify-center w-full px-6 py-2.5 text-center duration-200 rounded-full inline-flex bg-primary  border-2 text-white border-primary hover:text-white font-medium focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
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
    description:"Staying at the forefront of data analytics and AI, we embrace cutting-edge technologies to extract profound insights and drive meaningful intelligence. Through constantly evolving strategies leveraging the latest advancements, we empower organizations to unlock hidden potential within their data. This enables informed decision-making and a competitive edge in today's data-driven landscape. We are forward-thinking guides, revealing the full power of data and AI to shape the future."
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
