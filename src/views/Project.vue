<template>
  <div class=" w-full overflow-hidden relative">
    <img
        class="h-full w-full z-0 absolute opacity-50"
        src="../assets/shapes/shape-18.svg"
        alt="Bg Shape"/>

    <div>
      <div class="flex lg:flex-col lg:h-full lg:w-16 right-0 space-x-3 lg:space-y-4 lg:space-x-0 absolute justify-center  flex-row w-full h-16 bottom-0">
        <button
            v-for="index in projects" @click="activeProject(index)"
            :class="{'bg-gray-200': activeIndex === index.id}"
            class="w-3 h-3 p-2 rounded-full border-2 hover:bg-green-50 hover:border-green-50">
        </button>
      </div>
    </div>
    <div :class="currentProject.theme">
      <h1 class="xl:text-4xl flex justify-center w-full text-3xl text-center text-white font-extrabold pt-6 uppercase">Our Projects</h1>
      <div
        class="xl:container  m-auto px-4 md:px-12 xl:px-16">
      <div
          class="h-screen md:flex md:gap-6 md:items-center justify-center md:space-y-0 lg:items-center">

        <div
            class="md:5/12 lg:w-1/2 sm:items-center flex justify-center py-10 md:py-0 ">
          <img
              :src="currentProject.ImageSrc"
              :alt="currentProject.name"
              loading="eager"
              class="md:h-[30rem] h-[20rem] w-[40rem] object-contain z-10"
              :class="{'animate-bounce animate-once': animateImage}"
          />
        </div>

        <div class="md:7/12 lg:w-1/2 h-fit pt-6 md:pt-6">
          <span class="z-10">
           <p
               class="text-sm uppercase font-normal tracking-tight sm:text-xl">{{ currentProject.category }}
           </p>
           <p
               class="text-3xl tracking-tight  font-bold sm:text-5xl">{{currentProject.name }}
           </p>
           <p
               class="max-w-xl mt-4 text-base tracking-tight font-medium ">{{currentProject.description}}
           </p>
         </span>
          <router-link
              v-if="currentProject.link"
              :to="currentProject.link"
              :href="currentProject.link"
              class="flex underline underline-offset-4 cursor-pointer hover:scale-105 h-12 justify-left w-fit"
          ><span class=" z-50 hover:font-medium  text-white text-xs lg:text-base  lg:font-light cursor-pointer flex items-center justify-center">
            MORE
           <box-icon name="right-arrow-alt" class="fill-white"></box-icon>
          </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>


<script setup>
import AOS from "aos";
import {onMounted, ref} from "vue";
import ankeboot from "../assets/projects/ankeboot.png";
import rigelSMS from "../assets/projects/rigel.png"
import tutor from "../assets/projects/tutor.png"
import betPlus from "../assets/projects/betPlus.png";
import anbessa from "../assets/projects/anbessa-desktop.png";
import fotbol from '../assets/projects/futbol.png';
import gebeta from "../assets/projects/gebeta1.png";
onMounted(() => {
  AOS.init({
    duration: 1600,
  });
})

const projects = [
  {
    id:1,
    name:"Rigel School Management",
    theme:"purple",
    category:"Web and Mobile app",
    description:"A groundbreaking platform seamlessly integrating AI into classrooms. Experience personalized teaching support and tailored assessments through our AI-Integrated Lesson Plans and Question Generator. Gain real-time insights into student performance with Live Grade Reports and Rankings, while promoting accountability and a holistic view of behavior through Real-Time Absentee Recording and Inclusive Conduct Assessment.",
    ImageSrc:rigelSMS,
    link:"/SMS"
  },
  {
    id:2,
    name:"Tutor",
    theme:"gray",
    category:"Web app",
    description:"Tutor is a web app that connects students of all ages and academic levels with highly skilled tutors from a wide range of subjects. With its intuitive interface and robust features,  Tutor streamlines the process of finding the perfect tutor for individual learning needs. ",
    ImageSrc:tutor,

  },
  {
    id:3,
    name:"Company Management System",
    theme:"orange",
    category:"Web app",
    description:"Help to manage their inventory, record incoming and outgoings, keep up with daily sales, get aggregate data on transactions, manage company letters and employees.",
    ImageSrc:ankeboot,

  },
  {
    id:4,
    name:"Bet+ Sports Betting",
    theme:"blue",
    category:"Web app",
    description:"The ultimate sports betting platform that revolutionizes the way you connect with your favorite sports games and place your bets, all through a seamless web app experience. Designed to cater to sports enthusiasts and avid bettors, Offers a comprehensive suite of features that enhance the sports betting journey.",
    ImageSrc:betPlus,

  },
  {
    id:5,
    name:"Anbessa Sports Betting",
    theme:"red",
    category:"Web app",
    description:"Anbessa Sport betting app allows to connect to your favorite sports game and place your bets via web and mobile apps. It also has Sign up Process, User Management, Collating Information and Inputs from Bookies, Management of Payment and Prize along with Content.",
    ImageSrc:anbessa,

  },
  {
    id:6,
    name:"FutBol ",
    theme:"white",
    category:"Web app",
    description:"Premier source for the latest and most comprehensive updates on sports from all corners of the world. FutBol offers an exciting opportunity for advertisers to showcase their brands and reach sports enthusiasts worldwide.",
    ImageSrc:fotbol,

  },
  {
    id:7,
    name:"Gebeta app",
    theme:"yellow",
    category:"Mobile app",
    description:"This app uses Accessibility services to provide users with a convenient and easy-to-use way to manage their telecoms services. The app allows users to recharge their balance, send call me backs, transfer credit, buy and send Ethio Gebeta packages, view their remaining balance and package amount, and track their expenses.",
    ImageSrc:gebeta,

  },
]
const activeIndex = ref(1)
const animateImage = ref(false)
let currentProject = ref(projects[0])
function activeProject(index){
  animateImage.value = true;
  currentProject.value = index;
  activeIndex.value = index.id;
  setTimeout(() => {
    animateImage.value = false;
  }, 1000);
}

</script>

<style scoped>
.purple{
  @apply bg-purple-600 text-purple-50
}
.gray{
  @apply bg-gray-700 text-gray-50
}
.red{
  @apply bg-red-600 text-red-50
}
.green{
  @apply bg-green-700 text-green-50

}
.orange{
  @apply bg-orange-700 text-orange-100
}
.blue{
  @apply bg-blue-700 text-blue-50
}
.white{
   @apply bg-white text-gray-700
 }
.yellow{
  @apply bg-yellow-600 text-yellow-50
}
@keyframes bounce-once {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

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
