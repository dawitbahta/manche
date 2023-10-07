<template>
  <footer class="bg-white mx-auto max-w-7xl">
    <div
      class="px-1 pt-5 pb-10 mx-auto flex justify-center overflow-hidden sm:px-6 lg:px-8"
    >
      <span class="mx-auto mt-2 text-sm text-center text-gray-600">
        © {{ copyrightDate }}
        <span class="text-black font-semibold">
          rigel.<span class="text-primary">studio.</span>
          <span class="font-normal text-gray-600"> All rights reserved. </span>
        </span>
      </span>
    </div>
  </footer>
</template>

<script setup>
const copyrightDate = new Date().getFullYear();
</script>
