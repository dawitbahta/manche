<template>

  <div class="h-screen w-full overflow-auto">
  <div v-for="(project,index) in projects" :key="index" :class="project.theme" >
    <h1 class="absolute left-0 xl:text-4xl text-3xl text-center font-extrabold p-4 mx-auto text-white border flex justify-start w-fit px-4 ">Projects</h1>

    <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
      <div class=" h-screen dark:lg:bg-darker space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
        <div class="md:5/12 lg:w-1/2  items-center flex justify-center ">

          <img
              :src="project.ImageSrc"
              alt="image"
              loading="lazy"
              class="h-[34rem] w-[34rem] object-cover pt-5"

          />
        </div>
        <div class="md:7/12 lg:w-1/2">
         <div class="py-6">
           <p class="text-sm uppercase font-normal tracking-tight text-green-200 sm:text-xl">
             {{ project.category }}
           </p>
           <p class="text-3xl tracking-tight text-green-100 font-bold sm:text-5xl">
             {{project.name }}
           </p>
           <p class="max-w-xl mt-4 text-base tracking-tight font-medium text-green-100">
             {{project.description}}
           </p>
         </div>

          <a
              :href="project.link"
              class="flex h-12  justify-left w-fit"
          >
            <span
                class="relative text-base font-semibold text-green-50 hover:underline "
            >More</span
            >
          </a>
        </div>
      </div>
    </div>
  </div>

    <div>
      <div class="h-3 w-3 border border-white"></div>
    </div>


  </div>
</template>


<script setup>
import AOS from "aos";
import {onMounted} from "vue";
onMounted(() => {
  AOS.init({
    duration: 1600,
  });

})

const projects = [
  {
    name:"Project Tanos",
    theme:"red",
    category:"Android app",
    description:"A screenshot is a digital image that shows the contents of a computer display. A screenshot is created by the operating system or software running on the device powering the display. Additionally, screenshots can be captured by an",
    ImageSrc:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
    link:""
  },
  {
    name:"Project Iron man",
    theme:"green",
    category:"Web app",
    description:"A screenshot is a digital image that shows the contents of a computer display. A screenshot is created by the operating system or software running on the device powering the display. Additionally, screenshots can be captured by an",
    ImageSrc:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link:""
  },
]


</script>

<style scoped>
.red{
  @apply bg-red-500;
}
.green{
  @apply bg-green-500;
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
