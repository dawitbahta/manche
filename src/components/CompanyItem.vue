<template>
  <div class="flex-none w-fit sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-3 m-2">
    <!-- <box-icon :name="company" class="w-8 h-8"></box-icon> -->
    <div class="font-semibold italic uppercase text-black text-center text-xl">{{ label }}</div>
  </div>
</template>

<script setup>
defineProps({
  company: {
    type: String,
    default: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>
<style scoped>

</style>