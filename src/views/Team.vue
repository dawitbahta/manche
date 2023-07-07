<template>

      <div class="bg-gray-100 flex justify-center mx-auto pt-16">
        <div>
          <p class="text-green-500 text-md text-center font-bold pb-3">BUILDING TEAM</p>
          <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
        </div>
      </div>
      <div class="w-full pt-10 bg-gray-100">
        <div class="container mx-auto ">
          <div class=" lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div v-for="(member,index) in teamMembers" :key="index"
                 data-aos="fade-right"
                 class=" p-3 xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div class="rounded overflow-hidden shadow-md bg-white">
                <div class="absolute -mt-20 w-full flex justify-center">
                  <div class="h-32 w-32">
                    <img :src="member.imageSrc" :alt="member.name+'photo'" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                  </div>
                </div>
                <div class="px-6 mt-16">
                  <h1 class="font-bold text-3xl text-center mb-1">{{member.name}}</h1>
                  <p class="text-gray-800 text-sm text-center">{{member.title}}</p>
                  <p class="text-center text-gray-600 text-base pt-3 font-normal">{{member.roleDescription}}</p>

                  <div class="flex py-5 items-end ">
                      <div :class="member.upwork? 'justify-between' :'justify-evenly'" class="w-2/4 h-10  flex  items-center   ">
                        <a v-if="member.github" :href="member.github" target="_blank" class="  h-full flex items-center">
                          <box-icon type='logo' name='github' class="fill-gray-500 hover:fill-green-600" ></box-icon>
                        </a>

                        <a   v-if="member.linkedIn" :href="member.linkedIn" target="_blank" class="h-full flex items-center">
                            <box-icon type='logo' name='linkedin' class="fill-gray-500 hover:fill-green-600"></box-icon>
                        </a>

                        <a v-if="member.upwork" :href="member.upwork" target="_blank"  class="  h-full flex items-center">
                          <box-icon type='logo' name='upwork' class="fill-gray-500 hover:fill-green-600"></box-icon>
                        </a>

                      </div>

                    <div class="w-2/4 h-10  flex justify-end items-center text-sm  hover:text-green-600   ">
                            <box-icon name='current-location' class="fill-gray-500 hover:fill-green-600 w-5 "></box-icon>

                          <div class=" px-1 fill-gray-500 hover:text-green-600 ">
                              {{ member.location }}
                          </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import AOS from "aos";
import {onMounted} from "vue";
import adil from "../assets/teams/adil.jpeg";
import beka from "../assets/teams/bekaHaile.jpeg";
import yosef from "../assets/teams/yosefSeboka.jpeg";
import biniyam from "../assets/teams/biniyamLemma.jpeg";
import eyouel from '../assets/teams/eyouelKenfu.jpeg';
import firaol from '../assets/teams/firaolDida.jpeg';
import bereket from '../assets/teams/bereketGobeze.jpeg';
import haben from '../assets/teams/habenAmare.jpeg';
import placeHolder from '../assets/teams/placeHolder.png';
onMounted(() => {
  AOS.init({
    duration: 1200,
  });
})

const teamMembers = [
  {
    imageSrc:adil,
    name:"Adil Abdu",
    title:"Senior Developer | Board Member | CFO",
    roleDescription:"Lead author on an IEEE Access publication on unsupervised machine learning algorithms, involved in internationally nominated projects.",
    linkedIn:"http://www.linkedin.com/in/yosefseboka",
    github:"https://github.com/adilabdu",
    upwork:"https://www.upwork.com/freelancers/~012639c223643a15e8",
    location:"Ethiopia"
  },
  {
    imageSrc:yosef,
    name:"Yosef Seboka ",
    title:"Analytics Lead | Board Member | Developer",
    roleDescription:"Analyst with a strong engineering background adeptly devises innovative approaches to drive growth and enhance operational efficiency.",
    linkedIn:"https://www.linkedin.com/in/yosefseboka",
    github:"https://github.com/yosef-seboka",
    location:"Ethiopia"

  },
  {
    imageSrc:biniyam,
    name:"Biniyam Lemma ",
    title:"Full Stack Developer | Board Member | COO",
    roleDescription:"As a dynamic leader and skilled full-stack developer, Biniyam's strategic insights and technical expertise drive our company's success and growth.",
    linkedIn:"https://www.linkedin.com/in/biniyam-lemma-2a580615a/",
    github:"https://github.com/biniya",
    location:"Ethiopia"

  },
  {
    imageSrc:placeHolder,
    name:"Kalid Abdu",
    title:"CTO | Board Member | Technical Advisor",
    roleDescription:"Former Anbessa CTO, now steers our company as the CTO and Project Manager, with 7+ years of diverse programming and project leading experiences." ,
    linkedIn:"https://www.linkedin.com/in/kalid-abdu-871a0422a/",
    github:"https://github.com/Kalid10",
    upwork:"https://www.upwork.com/freelancers/~01941e5442f9956d70?referrer_url_path=%2Fab%2Fprofiles%2Fsearch%2Fdetails%2F~01941e5442f9956d70%2Fprofile",
    location:"Ethiopia"

  },  {
    name:"Banchialem Maru",
    imageSrc:placeHolder,
    title:"Board Member | Strategic Advisor | Investor ",
    roleDescription:"A visionary and empathetic leader who is passionately dedicated to helping others achieve their goals. With an unwavering commitment to consistently inspiring and empowering those around",
    location:"Ethiopia"
  },
  {
    name:"Thomas Melesse",
    imageSrc:placeHolder,
    title:"Board Member | Strategic Advisor | Investor",
    roleDescription:"A keen investor who brings his sharp business acumen to our team. Thomas' strategic investments and insights significantly contribute to the company's ongoing success.",
    location:"Ethiopia"
  },
  {
    name:"Bereket Gobeze",
    imageSrc:bereket,
    title:"Advisor | Senior Software Engineer",
    roleDescription:"An accomplished senior software engineer and former CTO, now an advisor and senior software engineer at our company, driving technological excellence and strategic growth.",
    linkedIn:"https://www.linkedin.com/in/bereket-gobeze/",
    github:"https://github.com/bereketnyb",
    location:"Ethiopia"
  },
  {
    name:"Eyouel Kenfu ",
    imageSrc:eyouel,
    title:"Advisor | Software Engineer",
    roleDescription:"Experienced Global Operations Specialist at META (Facebook), With a Bachelor's degree in Computer Science and proficiency in languages such as SQL, Java, Laravel, and React JS. ",
    linkedIn:"https://www.linkedin.com/in/eyouel-ayalew-kenfu/",
    github:"https://github.com/yosef-seboka",
    location:"Ireland"
  },
  {
    name:"Beka Haile",
    imageSrc:beka,
    title:"Advisor | Software Engineer",
    roleDescription:"Experienced Software Engineer with a demonstrated history of working in the IT and services industry. Skilled in Flutter, React Js, Java, Android Development, web development and CI/CD.",
    linkedIn:"https://www.linkedin.com/in/beka-haile-589793195/",
    github:"https://github.com/BekaHaile",
    location:"UAE"
  },
  {
    name:"Firaol Dida",
    imageSrc:firaol,
    title:"Advisor | Software Engineer",
    roleDescription:"Results-oriented full stack developer with 5+ years of experience, holding a degree in Computer Science and a Master's in Bioinformatics. With a proven track record of success in software development.",
    linkedIn:"https://www.linkedin.com/in/firaol-dida-150278156/",
    github:"https://github.com/yosef-seboka",
    upwork:"https://www.upwork.com/freelancers/~01ccb2d02064d3492d?referrer_url_path=%2Fab%2Fprofiles%2Fsearch%2Fdetails%2F~01ccb2d02064d3492d%2Fprofile",
    location:"Ethiopia"
  },
  {
    name:"Haben Amare",
    imageSrc:haben,
    title:"Advisor | Software Engineer",
    roleDescription:"An accomplished senior software engineer, leading and mentoring teams, driving excellence, growth, and innovation with a proven track record of success.",
    linkedIn:"https://www.linkedin.com/in/haben/",
    github:"https://github.com/habenamare",
    location:"Portugal"
  },
]
</script>
