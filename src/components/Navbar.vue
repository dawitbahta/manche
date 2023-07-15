<template>
  <span class="relative">
  <div class="fixed top-0 w-full z-30">
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
        :class="navBarStyle"

    >
      <div class="flex items-center justify-between">
        <router-link
            to="/"
            href="#home"
            class="
          w-fit
          text-2xl
          font-bold
          ml-10
          rounded-md
          lowercase
          "
            :class="{ ' text-gray-800 ': scrolled }"
        >
          rigel. <span class="text-[#F6BA1E]">studio</span>

      </router-link>
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
        <a v-if="!isOnSubRoute" v-for="(section,index) in sections" :key="index"
           :href="section.linkId"
            class="text-md hover:border-b-2  hover:border-green-500 hover:font-bold uppercase"
            :class="navBarTextStyle"
             @click="scrollToSection($event, section.linkId)"
        >
          {{ section.name }}
        </a>

        <a v-if="isOnSubRoute" href="#contact" class="uppercase hover:text-purple-500" @click="showNavBar = false">

          Contact
        </a>
      </ul>


    </nav>
  </div>
</span>
</template>

<script setup>
import {ref, watch} from "vue";
import {useRouter} from "vue-router";
const sections = [
  {name:'Home',linkId:'#home'},
  {name:'About',linkId:'#about'},
  {name:'Projects',linkId:'#projects'},
  {name:'Contact',linkId:'#contact'},
]
const route = useRouter().currentRoute;
const isOnSubRoute = ref(false);
const subRoute = '/SMS';

watch(
    () => route.value.path,
    (newPath) => {
      isOnSubRoute.value = newPath == subRoute;
    }
);

const showNavBar = ref(false)
const showMenu = ref(false);
const scrolled = ref(false);

function scrollToSection(event, linkId) {
  event.preventDefault();
  const targetElement = document.querySelector(linkId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
  showNavBar.value = false
}

const navBarStyle = ref('bg-transparent');
const navBarTextStyle = ref('text-white');
window.addEventListener("scroll", () => {
  switch (true) {
    case window.scrollY <1000:

      navBarStyle.value = 'bg-transparent';
      navBarTextStyle.value = 'text-white';
      break;

    default:
      navBarStyle.value = 'bg-white';
  navBarTextStyle.value = 'text-black';
      break;
  }
});
</script>

<style scoped>
</style>