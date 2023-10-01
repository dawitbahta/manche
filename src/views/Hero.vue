<template>
  <section
    class="mx-auto bg-image items-center flex flex-col justify-between bg-black space-y-5 min-h-screen h-screen pt-12 text-center"
  >
    <div
      class="w-11/12 h-full py-3 items-center md:flex-row flex-col space-y-3 md:space-y-0 flex justify-evenly"
    >
      <!--          Left section-->
      <div
        class="w-full md:w-7/12 flex flex-col space-y-5 md:space-y-0 items-center justify-evenly min-h-full"
      >
        <div
          class="flex max-w-5xl flex-col items-center w-full font-lexend justify-center space-y-8 lg:space-y-10"
        >
          <div
            class="text-5xl w-full px-2 lg:text-7xl flex flex-col items-center justify-center space-y-2 text-white font-semibold"
          >
            <span class=""> Driving Ethiopia's </span>
            <span class="relative whitespace-nowrap w-fit text-blue-600">
              <svg
                aria-hidden="true"
                class="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-500"
                preserveAspectRatio="none"
                viewBox="0 0 418 42"
              >
                <path
                  d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                ></path>
              </svg>
              <span class="relative">Digital Future</span>
            </span>
          </div>

          <!--          Mobile version-->
          <p class="lg:hidden text-gray-300 w-11/12">
            With creativity and technology, we craft software solutions that
            redefine possibilities. Join us in forging a digital ETHIOPIA!
          </p>

          <!--          Desktop version-->
          <p
            class="max-w-3xl mx-auto mt-8 text-lg text-gray-400 font-light hidden md:inline-block"
          >
            At Rigel, we blend innovation and technology to craft software
            solutions that catalyze growth and drive progress. Join us on this
            digital journey to transform ideas into realities and create a
            technologically empowered ETHIOPIA!
          </p>
        </div>

        <div
          class="flex flex-col space-y-3 md:space-y-0 md:flex-row max-w-5xl py-2 md:space-x-10 justify-center gap-3 mx-auto w-10/12"
        >
          <a
            class="focus:outline-none inline-flex items-center font-semibold justify-center rounded-lg bg-blue-600 hover:bg-black hover:border-2 hover:border-primary text-white duration-200 lg:w-4/12 px-6 py-2 text-center w-full"
            href="#about"
            >Why Rigel?</a
          >
          <a
            class="focus:outline-none inline-flex items-center justify-center rounded-lg border-2 hover:text-white border-primary text-white font-bold duration-200 lg:w-4/12 px-6 py-2 hover:bg-primary cursor-pointer text-center w-full"
            href="#contact"
            >Contact Us</a
          >
        </div>
      </div>

      <!--      Desktop Version-->
      <img
        alt="Rigel Star"
        class="hidden md:flex w-4/12 object-none rounded-full h-4/6 glow"
        src="../assets/hero/rigel.png"
      />
    </div>

    <div class="flex flex-col w-full space-y-5 py-2 bg-gray-900">
      <div
        class="font-lexend font-semibold italic md:not-italic md:text-2xl text-gray-400"
      >
        Trusted by these companies
      </div>

      <div
        ref="companyList"
        class="flex scrollbar-hide overflow-x-scroll snap-x snap-mandatory"
      >
        <company-item company="" label="Ankeboot Books"></company-item>
        <company-item company="bo" label="Anbessa Betting"></company-item>
        <company-item company="bo" label="BB Trading"></company-item>
        <company-item company="bo" label="Bios College"></company-item>
        <company-item company="bo" label="Agezhale Trading"></company-item>
        <company-item company="bo" label="Alpha Betting"></company-item>
        <company-item company="bo" label="AIA"></company-item>
        <company-item company="bo" label="Universal PLC"></company-item>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
import CompanyItem from "../components/CompanyItem.vue";
import { onMounted, ref } from "vue";

AOS.init();

AOS.init({
  // Global settings:
  disable: false,
  duration: 1600,
});
const companyList = ref();

const scrollCompanyList = () => {
  if (
    companyList.value.scrollLeft >=
    companyList.value.scrollWidth - companyList.value.clientWidth
  ) {
    companyList.value.scrollLeft = 0;
  } else {
    companyList.value.scrollLeft += 1;
  }
};

onMounted(() => {
  setInterval(scrollCompanyList, 20);
});
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.scrollbar-hide {
  -ms-overflow-style: none; /* for Internet Explorer and Edge */
  scrollbar-width: none; /* for Firefox */
}

.bg-image {
  background-image: url("../assets/dark_star.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@keyframes pulse {
  0% {
    box-shadow:
      0 0 10px #fff,
      0 0 20px #23e0fd,
      0 0 30px #08f,
      0 0 40px #08f,
      0 0 50px #08f,
      0 0 60px #08f;
  }
  50% {
    box-shadow:
      0 0 20px #fff,
      0 0 30px #23e0fd,
      0 0 40px #08f,
      0 0 50px #08f,
      0 0 60px #08f,
      0 0 70px #08f;
  }
  100% {
    box-shadow:
      0 0 10px #fff,
      0 0 20px #23e0fd,
      0 0 30px #08f,
      0 0 40px #08f,
      0 0 50px #08f,
      0 0 60px #08f;
  }
}

.glow {
  box-shadow:
    0 0 10px #23e0fd,
    0 0 20px #23e0fd,
    0 0 30px #08f,
    0 0 40px #08f,
    0 0 50px #08f,
    0 0 60px #08f;
  animation: pulse 2s infinite;
}
</style>