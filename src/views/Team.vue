<template>
  <section class="flex flex-col lg:p-16 bg-gray-100">
    <div class="bg-gray-100 flex  justify-center mx-auto pt-10">
    <div class="font-lexend">
      <p class="text-primary text-md text-center font-bold pb-3">BUILDING TEAM</p>
      <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-bold pb-6 sm:w-full w-5/6 mx-auto">The Talent Behind the Scenes</h1>
    </div>
  </div>

  <div class=" flex flex-col px-4 lg:px-0 lg:space-y-0  sm:flex-row  sm:justify-around flex-wrap ">
            <div v-for="(member,index) in teamMembers" :key="index"

                 class=" p-3 xl:w-1/3 sm:w-3/4 md:w-2/5 relative  xl:max-w-sm lg:w-2/5">

                <div class="translate-y-10 lg:translate-y-10 w-full flex justify-center">
                    <img :src="member.imageSrc" :alt="member.name+'photo'" role="img" class="rounded-full object-cover lg:w-28 w-20 shadow-md" />
                </div>
                <div class="px-6 pt-14  shadow-md bg-white rounded-md">
                  <h1 class="font-bold text-3xl text-center mb-1 font-lexend">{{member.name}}</h1>
                  <p class="text-gray-800 text-sm text-center">{{member.title}}</p>
                  <p class="text-center text-gray-600 text-base pt-3 font-normal">{{member.roleDescription}}</p>

                  <div class="flex py-5 items-end ">
                      <div :class="member.upwork? 'justify-between' :'justify-evenly'" class="w-2/4 h-10  flex  items-center   ">
                        <a v-if="member.github" :href="member.github" target="_blank" class="  h-full flex items-center">
                          <box-icon type='logo' name='github' class="fill-gray-500 hover:fill-gray-900" ></box-icon>
                        </a>

                        <a   v-if="member.linkedIn" :href="member.linkedIn" target="_blank" class="h-full flex items-center">
                            <box-icon type='logo' name='linkedin' class="fill-gray-500 hover:fill-blue-500"></box-icon>
                        </a>

                        <a v-if="member.upwork" :href="member.upwork" target="_blank"  class="  h-full flex items-center">
                          <box-icon type='logo' name='upwork' class="fill-gray-500 hover:fill-green-500"></box-icon>
                        </a>

                      </div>

                    <div class="w-2/4 h-10  flex justify-end items-center text-sm  hover:text-primary group">
                            <box-icon name='current-location' class="fill-gray-500 group-hover:fill-primary w-5 "></box-icon>

                          <div class=" px-1 fill-gray-500 group-hover:text-primary ">
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
    imageSrc:placeHolder,
    name:"Kalid Abdu",
    title:"CEO | Board Member | Project Manager",
    roleDescription:"Software Engineer with 7+ years in leadership roles, CTO experiences at top firms,experience working with international clients, now leading rigel to new heights.",
    linkedIn:"https://www.linkedin.com/in/kalid-abdu-871a0422a/",
    github:"https://github.com/Kalid10",
    upwork:"https://www.upwork.com/freelancers/~01941e5442f9956d70?referrer_url_path=%2Fab%2Fprofiles%2Fsearch%2Fdetails%2F~01941e5442f9956d70%2Fprofile",
    location:"Ethiopia"
  },
  {
    imageSrc:adil,
    name:"Adil Abdu",
    title:"CTO | Board Member | Technical Lead",
    roleDescription:"Our CTO is the lead author on an IEEE Access publication on unsupervised machine learning algorithms, involved in internationally nominated projects.",
    linkedIn:"http://www.linkedin.com/in/yosefseboka",
    github:"https://github.com/adilabdu",
    upwork:"https://www.upwork.com/freelancers/~012639c223643a15e8",
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
    imageSrc:yosef,
    name:"Yosef Seboka ",
    title:"Analytics Lead | Board Member | Developer",
    roleDescription:"An analyst with a strong engineering background adeptly devises innovative approaches to drive growth and enhance operational efficiency.",
    linkedIn:"https://www.linkedin.com/in/yosefseboka",
    github:"https://github.com/yosef-seboka",
    location:"Ethiopia"

  },

  {
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
    title:"Senior Software Engineer | Technical Advisor",
    roleDescription:"An accomplished senior software engineer and former Anbessa Tech CEO, now an advisor and senior software engineer at our company, driving technological excellence and strategic growth.",
    linkedIn:"https://www.linkedin.com/in/bereket-gobeze/",
    github:"https://github.com/bereketnyb",
    location:"Ethiopia"
  },
  {
    name:"Haben Amare",
    imageSrc:haben,
    title:"Senior Software Engineer | Technical Advisor",
    roleDescription:"Haben is an accomplished senior software engineer, leading teams and nurturing innovation. His expertise boosts the company's growth and drives us towards success.",
    linkedIn:"https://www.linkedin.com/in/haben/",
    github:"https://github.com/habenamare",
    location:"Portugal"
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
    title:" Backend Developer | Technical Advisor ",
    roleDescription:"Experienced Software Engineer with a demonstrated history of working in the IT and services industry. Skilled in Flutter, React Js, Java, Android Development, web development and CI/CD.",
    linkedIn:"https://www.linkedin.com/in/beka-haile-589793195/",
    github:"https://github.com/BekaHaile",
    location:"UAE"
  },
  {
    name:"Firaol Dida",
    imageSrc:firaol,
    title:"Frontend Developer | Technical Advisor",
    roleDescription:"Results-oriented full stack developer with 5+ years of experience, holding a degree in Computer Science and a Master's in Bioinformatics. With a proven track record of success in software development.",
    linkedIn:"https://www.linkedin.com/in/firaol-dida-150278156/",
    github:"https://github.com/yosef-seboka",
    upwork:"https://www.upwork.com/freelancers/~01ccb2d02064d3492d?referrer_url_path=%2Fab%2Fprofiles%2Fsearch%2Fdetails%2F~01ccb2d02064d3492d%2Fprofile",
    location:"Ethiopia"
  },

]
</script>
