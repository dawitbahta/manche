<template>
  <section class="bg-gray-950 text-white ">
    <div class="pt-20">
      <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div class="wf-ull lg:w-1/2">
          <p class="text-xl font-bold text-gray-400 p-3 border-l-2 border-red-500">404 error</p>
          <h1 class="mt-3 text-2xl font-semibold text-gray-400 dark:text-white md:text-3xl">Page not found</h1>
          <p class="mt-4 text-gray-400">Sorry, the page you are looking for doesn't exist.</p>
          <div class="flex items-center mt-6 gap-x-3">
            <router-link to="/" class=" flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-400 transition-colors duration-200 border border-white rounded-lg gap-x-2 sm:w-auto hover:border-green-600   ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              <span>Home</span>
            </router-link>
          </div>
        </div>

        <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img class="w-full max-w-lg lg:mx-auto" src="../assets/404.svg" alt="page-not-found">
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

</script>