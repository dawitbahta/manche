<template>

  <footer class="bg-white">
    <div class="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">

<!--      <div class="flex justify-center mt-8 space-x-6">-->
<!--                    <span class="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto ">-->

<!--                    <a href="linkedin.com/rigel_studio" class="w-6 h-6 transition ">-->
<!--                       <img class="w-5 h-5 " src=".././assets/icons/linkedin.svg">-->
<!--                      </a>-->

<!--                      <a href="twitter.com/rigel_studio" class="w-6 h-6 ">-->
<!--                         <img class="w-5 h-5 " src=".././assets/icons/twitter.svg">-->
<!--                      </a>-->

<!--                      <a href="facebook.com/rigel_studio" class="w-6 h-6 transition">-->
<!--                       <img class="w-5 h-5 " src=".././assets/icons/facebook.svg">-->
<!--                      </a>-->


<!--                    </span>-->
<!--      </div>-->
      <p class="mt-8 text-center">
                    <span class="mx-auto mt-2 text-sm text-gray-500">
                      Copyright © {{copyrightDate}}
                      <a class="">
                        Rigel.studio
                      </a>
                    </span>
      </p>
    </div>
  </footer>

</template>

<script setup>
const copyrightDate = new Date().getFullYear()

</script>
