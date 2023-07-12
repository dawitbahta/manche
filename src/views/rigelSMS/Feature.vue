<template>
<!-- feature-->
  <section class="bg-gray-50">
    <div class="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
      <div>
        <div class="max-w-2xl">
          <p class="text-2xl font-medium tracking-tight text-black sm:text-4xl">
            RIGEL SMS
          </p>
          <p class="max-w-2xl mt-4 text-lg tracking-tight text-gray-600">
            A groundbreaking platform seamlessly integrating AI into classrooms. Experience personalized teaching support and tailored assessments through our AI-Integrated Lesson
          </p>
        </div>
      </div>
      <div class="">
        <div class="max-w-xl py-12 mx-auto text-left lg:max-w-7xl">
          <h2 class="sr-only">Features.</h2>
          <div>
            <div class="grid grid-cols-2 gap-12 lg:grid-cols-3 lg:space-y-0">
              <div v-for="(feature, index) in features" :key="index" >
              <div data-aos="fade-right">

                     <div>
                  <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                    {{feature.icon}}
                  </div>
                  <p class="mt-4 text-lg font-medium leading-6 text-black">
                    {{feature.title}}
                  </p>
                </div>
                <div class="mt-4 text-base text-gray-500">
                  {{feature.description}}
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- feature details slider -->
  <div class=" w-full overflow-hidden relative bg-purple-500">
    <img
        class="h-full w-full z-0 absolute opacity-50"
        src="../../assets/shapes/shape-12.svg"
        alt="Bg Shape"/>

    <div>
      <div class="flex lg:flex-col lg:h-full lg:w-16 right-0 space-x-3 lg:space-y-4 lg:space-x-0 absolute justify-center  flex-row w-full h-16 bottom-0">
        <button
            v-for="index in featureDetails" @click="activeFeature(index)"
            :class="{'bg-white': activeIndex === index.id}"
            class="w-3 h-3 p-2 rounded-full border-2 hover:bg-green-50 hover:border-green-50">
        </button>
      </div>
    </div>
    <div :class="currentFeature.theme">
      <div
          class="xl:container  m-auto px-4 md:px-12 xl:px-16">
        <div
            class="h-screen md:flex md:gap-6 md:items-center justify-center md:space-y-0 lg:items-center">

          <div
              class="md:5/12 lg:w-1/2 sm:items-center flex justify-center py-10 md:py-0 ">
            <img
                :src="currentFeature.ImageSrc"
                :alt="currentFeature.name"
                loading="eager"
                class="md:h-[30rem] h-[20rem] w-[40rem] object-contain z-10"
                :class="{'animate-bounce animate-once': animateImage}"
            />
          </div>

          <div class="md:7/12 lg:w-1/2 h-fit pt-6 md:pt-6 text-white">
          <span class="z-10">
           <p
               class="text-3xl tracking-tight  font-bold sm:text-5xl">{{currentFeature.title }}
           </p>
           <p
               class="max-w-xl mt-4 text-base tracking-tight font-medium ">{{currentFeature.description}}
           </p>
         </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AOS from "aos";
import {onMounted, ref} from "vue";
import RigelDesktop from "../../assets/projects/rigelSMS/rigelSMS.png";
import RigelMobile from "../../assets/projects/rigelSMS/mobile.png";

onMounted(() => {
  AOS.init({
    duration: 1600,
  });
})

const features = [
  {
    id:1,
    title:"Real Time ",
    description:"Our platform is constantly evolving to meet the changing needs of the tech industry, ensuring you'll always be ahead",
    icon:"",
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },
  {
    id:2,
    title:"Attendance Mgmt ",
    description:"Our platform is constantly evolving to meet the changing needs of the tech industry, ensuring you'll always be ahead",
    icon:"",
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },
  {
    id:2,
    title:"Performance tracking",
    description:"Our platform is constantly evolving to meet the changing needs of the tech industry, ensuring you'll always be ahead",
    icon:"",
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },


  {
    id:1,
    title:"Real Time Grade Report ",
    description:"Our platform is constantly evolving to meet the changing needs of the tech industry, ensuring you'll always be ahead",
    icon:"",
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },
  {
    id:2,
    title:"AI",
    description:"Our platform is constantly evolving to meet the changing needs of the tech industry, ensuring you'll always be ahead",
    icon:"",
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },
  {
    id:2,
    title:"Payment ",
    description:"Our platform is constantly evolving to meet the changing needs of the tech industry, ensuring you'll always be ahead",
    icon:"",
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },


]
const featureDetails =[
  {
    id:1,
    title: "Teacher view",
    description:"A groundbreaking platform seamlessly integrating AI into classrooms. Experience personalized teaching support and tailored assessments through our AI-Integrated Lesson Plans and Question Generator. Gain real-time insights into student performance with Live Grade Reports and Rankings, while promoting accountability and a holistic view of behavior through Real-Time Absentee Recording and Inclusive Conduct Assessment.",
    ImageSrc:RigelDesktop,
  },
  {
    id:2,
    title: "Parent view",
    description:"A groundbreaking platform seamlessly integrating AI into classrooms. Experience personalized teaching support and tailored assessments through our AI-Integrated Lesson Plans and Question Generator. Gain real-time insights into student performance with Live Grade Reports and Rankings, while promoting accountability and a holistic view of behavior through Real-Time Absentee Recording and Inclusive Conduct Assessment.",
    ImageSrc:RigelMobile,
  }
]

const activeIndex = ref(1)
const animateImage = ref(false)
let currentFeature = ref(featureDetails[0])
function activeFeature(index){
  animateImage.value = true;
  currentFeature.value = index;
  activeIndex.value = index.id;
  setTimeout(() => {
    animateImage.value = false;
  }, 1000);
}

</script>
<style scoped>
.animate-once {
  animation: bounce-once 1s;
  animation-iteration-count: 1;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}
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