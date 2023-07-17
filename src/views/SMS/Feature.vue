<template>
<!-- feature-->
  <section class="bg-gray-50">
    <div class="relative items-center w-full px-5 lg:pt-24 pt-5 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
      <div>
        <div class="max-w-2xl">
          <p class="text-2xl font-bold tracking-tight text-purple-500 sm:text-4xl">
            RIGEL
          </p>
          <p class="max-w-2xl lg:mt-4 mt-2 text-sm lg:text-sm font-light tracking-tight text-gray-500">
            {{rigelDescription}}
          </p>
        </div>
      </div>
      <div class="">
        <div class="max-w-xl lg:py-12 py-8 mx-auto text-left lg:max-w-7xl">
          <h2 class="sr-only">Features.</h2>
          <div>
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:space-y-0">
              <div v-for="(feature, index) in features" :key="index" >
              <div data-aos="fade-right">

                     <div>
                  <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                   <img :src="feature.icon">
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
               class="text-3xl tracking-tight font-bold sm:text-5xl">{{currentFeature.title }}
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

import aiIcon from '../../assets/icons/features/ai.svg';
import attendanceIcon from '../../assets/icons/features/attendance.svg';
import performanceIcon from '../../assets/icons/features/performance.svg';
import smartSchedulerIcon from '../../assets/icons/features/schedule.svg';
import refFlagIcon from '../../assets/icons/features/redFlag.svg';
import gradeReportIcon from '../../assets/icons/features/gradeReport.svg';
import customizableIcon from '../../assets/icons/features/customizable.png';
import languageIcon from '../../assets/icons/features/language.png';
import dataMgmtIcon from '../../assets/icons/features/dataMgmt.svg';
onMounted(() => {
  AOS.init({
    duration: 1600,
  });
})

const rigelDescription = "Rigel is one of Rigel Studio's groundbreaking software products designed to address numerous challenges in the field of education. With a robust set of features and an intuitive user interface, Rigel aims to revolutionize the way we approach learning and teaching."
const features = [
  {
    id:1,
    title:"AI-powered Learning",
    description:"Learning, transformed. Our AI assistant empowers educators with data-driven insights and tools to unlock each student's potential.",
    icon:aiIcon,
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },
  {
    id:2,
    title:"Attendance Management ",
    description:"Real-time attendance tracking and reporting to ensure students are present in class and identify trends over time.",
    icon:attendanceIcon,
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },
  {
    id:3,
    title:"Performance Tracking",
    description:"Performance tracking to identify areas for improvement and help to provide personalized support.",
    icon:performanceIcon,
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },
  {
    id:4,
    title:"Grade Report ",
    description:"Our platform is constantly evolving to meet the changing needs of the tech industry, ensuring you'll always be ahead",
    icon:gradeReportIcon,
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },
  {
    id:5,
    title:"Smart Scheduler",
    description:"Create class schedules automatically based on multiple parameters provided, such as teacher availability,Subject and classroom capacities and more",
    icon:smartSchedulerIcon,
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },
  {
    id:6,
    title:"Flagging System",
    description:"Filters students who are not doing well. such us who are absent frequently, who are failing classes, or who are struggling academically.",
    icon:refFlagIcon,
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },
  {
    id:7,
    title:"Language",
    description:"Accepts multiple languages, including Amharic and English. We are also on track to add additional languages in the near future.",
    icon:languageIcon,
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },

  {
    id:8,
    title:"Data Management",
    description:"Secure data management with backup & security to protect your data.",
    icon:dataMgmtIcon,
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },
  {
    id:9,
    title:"Customizable",
    description:"Customizable solution that can help your school overcome challenges and meet the needs of your students.",
    icon:customizableIcon,
    subFeatures:["subFeatureTitleOne","subFeatureTitleTwo","subFeatureTitleThree"]
  },
]


const featureDetails =[
  {
    id:1,
    title: "Web App",
    description:"A revolutionary web application that combines a teacher and management portal to streamline education management. Its integrated AI capabilities empower teachers to manage students effectively, create and track lesson plans, and receive personalized assistance. The teacher portal provides easy access to student profiles, attendance records, and progress tracking, while the AI assistant offers valuable insights for personalized instruction. The management portal equips administrators with comprehensive tools for overseeing classes, evaluating student performance, and optimizing educational outcomes.",
    ImageSrc:RigelDesktop,
  },
  {
    id:2,
    title: "Mobile App",
    description:"An innovative mobile app designed exclusively for parents to seamlessly follow up on their child's academic and ethical performance. With ParentTrack, parents can stay informed and actively engage in their child's educational journey, nurturing both their academic achievements and ethical development.One of the standout features of ParentTrack is its comprehensive ethical performance tracking system. Parents can access reports and assessments that provide valuable insights into their child's character traits, social skills, and ethical decision-making.",
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