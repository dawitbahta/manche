<template>
  <section class="flex flex-col lg:p-16 bg-gray-100">
    <div class="bg-gray-100 flex justify-center mx-auto pt-10">
      <div class="font-lexend">
        <p class="text-primary text-md text-center font-bold pb-3">
          BUILDING TEAM
        </p>
        <h1
          class="xl:text-4xl text-3xl text-center text-gray-800 font-bold pb-6 sm:w-full w-5/6 mx-auto"
        >
          The Talent Behind the Scenes
        </h1>
      </div>
    </div>

    <div
      class="flex flex-col px-4 lg:px-0 lg:space-y-0 sm:flex-row sm:justify-around flex-wrap"
    >
      <div
        v-for="(member, index) in teamMembers"
        :key="index"
        class="p-3 xl:w-1/3 sm:w-3/4 md:w-2/5 relative xl:max-w-sm lg:w-2/5"
      >
        <div
          class="translate-y-10 lg:translate-y-10 w-full flex justify-center"
        >
          <img
            :alt="member.name + 'photo'"
            :src="member.imageSrc"
            class="rounded-full object-cover lg:w-28 w-20 shadow-md"
            role="img"
          />
        </div>
        <div class="px-6 pt-14 shadow-md bg-white rounded-md">
          <h1 class="font-bold text-3xl text-center mb-1 font-lexend">
            {{ member.name }}
          </h1>
          <p class="text-gray-800 text-sm text-center">{{ member.title }}</p>
          <p class="text-center text-gray-600 text-base pt-3 font-normal">
            {{ member.roleDescription }}
          </p>

          <div class="flex py-5 items-end">
            <div
              :class="member.upwork ? 'justify-between' : 'justify-evenly'"
              class="w-2/4 h-10 flex items-center"
            >
              <a
                v-if="member.github"
                :href="member.github"
                class="h-full flex items-center"
                target="_blank"
              >
                <box-icon
                  class="fill-gray-500 hover:fill-gray-900"
                  name="github"
                  type="logo"
                ></box-icon>
              </a>

              <a
                v-if="member.linkedIn"
                :href="member.linkedIn"
                class="h-full flex items-center"
                target="_blank"
              >
                <box-icon
                  class="fill-gray-500 hover:fill-blue-500"
                  name="linkedin"
                  type="logo"
                ></box-icon>
              </a>

              <a
                v-if="member.upwork"
                :href="member.upwork"
                class="h-full flex items-center"
                target="_blank"
              >
                <box-icon
                  class="fill-gray-500 hover:fill-green-500"
                  name="upwork"
                  type="logo"
                ></box-icon>
              </a>
            </div>

            <div
              class="w-2/4 h-10 flex justify-end items-center text-sm hover:text-primary group"
            >
              <box-icon
                class="fill-gray-500 group-hover:fill-primary w-5"
                name="current-location"
              ></box-icon>

              <div class="px-1 fill-gray-500 group-hover:text-primary">
                {{ member.location }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
import { onMounted } from "vue";  
import eyouel from "../assets/teams/eyouelKenfu.jpeg"; 
import dawit from "../assets/teams/dawit.jpg"; 

onMounted(() => {
  AOS.init({
    duration: 1200,
  });
});

const teamMembers = [
  {
    imageSrc: dawit,
    name: "Dawit Bahta",
    title: "CEO | Board Member | Project Manager",
    roleDescription:
      "4+ experience in web and app developing, BSC in computer science, HND in networking and database",  
   location: "UK",
  },
  {
    imageSrc: eyouel,
    name: "Eyouel Kenfu",
    title: "CTO",
    roleDescription:
      "Our CTO experienced in Global operations as Risk Prevention Market Data Specialist(Africa) at META (Facebook)",
    github: "https://github.com/eyouelaya", 
    location: "USA",
  },
  
];
</script>