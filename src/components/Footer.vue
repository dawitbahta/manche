<template>
  <footer class="bg-white">
    <div class="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <p class="mt-8 text-center">
            <span class="mx-auto mt-2 text-sm text-gray-500">
              Developed by
               <span class="text-green-500">
                    Rigel Studio
              </span> <br>
              Copyright © {{copyrightDate}}
            </span>
      </p>
    </div>
  </footer>

</template>

<script setup>
const copyrightDate = new Date().getFullYear()

</script>
