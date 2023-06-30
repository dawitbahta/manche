<template>
  <span class="relative">
  <div class=" fixed top-0 w-full z-30">
    <nav
        class="
        px:8
        lg:px-16
        md:px-10
        py-3
        mx-auto
        md:flex md:justify-between md:items-center
        text-center
      font-semibold
text-gray-400
        transition-all duration-500
        bg-white
        sm:bg-transparent


              "
        :class="{ 'sm:bg-white text-black shadow-md ': scrolled }"
    >
      <div class="flex items-center justify-between">
        <a
            href="#home"
            class="
          w-fit
          text-2xl
          font-bold
          ml-10
          rounded-md
          uppercase
          "
            :class="{ ' text-gray-400 ': scrolled }"
        >
          Rigel

      </a>
        <!-- Mobile menu button -->
        <div @click="showNavBar = !showNavBar, showMenu = false" class="flex md:hidden">
          <button

              type="button"
              :class="{ ' text-black': scrolled }"
              class="
            pr-4
              text-gray-900
              hover:text-white
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 ">
              <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
          :class="showNavBar ? 'flex' : 'hidden'"
          class="
          flex-col
          mt-8
          space-y-4
          md:flex
          md:space-y-0
          md:flex-row
          md:items-center
          md:space-x-10
          md:mt-0
        bg-white
          md:bg-transparent
        "
      >
        <a v-for="(section,index) in sections" :key="index"
           :href="section.linkId"
            class="text-md hover:border-b-2 text-gray-400 hover:border-green-500 hover:font-bold uppercase"
            :class="{ 'text-black ': scrolled,  }"

            @click="showNavBar = false"
        >
          {{ section.name }}
        </a>



      </ul>


    </nav>
  </div>
</span>
</template>

<script setup>
import {ref} from "vue";
// import axios from "axios";
const sections = [
  {name:'Home',linkId:'#home'},
  {name:'About',linkId:'#about'},
  {name:'Projects',linkId:'#projects'},
  {name:'Contact',linkId:'#contact'},

]

const showNavBar = ref(false)
const showMenu = ref(false);
const scrolled = ref(false);

window.addEventListener("scroll", () => {
  scrolled.value = window.scrollY > 0;
});
</script>

<style scoped>
</style>