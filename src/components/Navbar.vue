<template>

    <nav
        class="
        fixed top-0 w-full z-50
        lg:px-16
        md:px-10
        lg:py-3
        py-2
        md:flex md:justify-between md:items-center
        text-center
        font-semibold
        font-lexend
        "
        :class="navBarStore.style"

    >
      <div class="flex items-center justify-between">
        <router-link
            to="/"
            href="#home"
            class="
          w-fit
          text-2xl
          px-5
          font-bold
          rounded-md
          lowercase
          "
            :class="navBarStore.secondaryStyle"
        >
          rigel.<span :class="navBarStore.logoStyle">studio</span>

      </router-link>

        <!-- Mobile menu button -->
        <div @click="handleMenuClick" class="flex md:hidden">
          <button
              v-if="!navBarStore.showNavBar"
              type="button"
              class="
            pr-4
            "
              :class="navBarStore.secondaryStyle"
          >
            <svg  viewBox="0 0 24 24" class="w-6 h-6 ">
              <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
            <box-icon v-else name="x" :class="navBarStore.menuButtonStyle"></box-icon>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
          :class="navBarStore.showNavBar ? 'flex  mt-10 z-50 ' + navBarStore.menuStyle  : 'hidden'"
          class="
          flex-col
          underline
          underline-offset-8
          lg:no-underline
          font-light
          h-screen
          md:h-fit
          space-y-10
          md:flex
          md:space-y-0
          md:flex-row
          md:items-center
          md:space-x-10
          md:mt-0
"
      >
        <a v-if="!isOnSubRoute" v-for="(section,index) in sections" :key="index"
           :href="section.linkId"
            class="text-md hover:border-b-2 hover:font-bold uppercase"
           :class="'border-' + navBarStore.secondaryStyle"
             @click="scrollToSection($event, section.linkId);"
        >
          {{ section.name }}
        </a>

        <a v-if="isOnSubRoute" href="#contact" class="uppercase hover:text-primary" @click="navBarStore.toggleNavBar()">

          Contact
        </a>
      </ul>
    </nav>


</template>

<script setup>
import {ref, watch} from "vue";
import {useRouter} from "vue-router";
import {useNavBarStore} from "../store/navbar_store.js";

const navBarStore = useNavBarStore();

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
      isOnSubRoute.value = newPath === subRoute;
    }
);

function scrollToSection(event, linkId) {
  event.preventDefault();
  const targetElement = document.querySelector(linkId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
  navBarStore.toggleNavBar()

  switch (linkId) {
    case '#home':
      navBarStore.currentPage = 'home';
      break;
    case '#about':
      navBarStore.currentPage = 'about';
      break;
    case '#projects':
      navBarStore.currentPage = 'projects';
      break;
    case '#contact':
      navBarStore.currentPage = 'contact';
      break;
    default:
      break;
  }
  navBarStore.setMenuTheme()
}

const handleMenuClick = () =>{
  navBarStore.toggleNavBar()
  navBarStore.toggleMenu()
  navBarStore.setMenuTheme()
}

</script>

<style scoped>
</style>