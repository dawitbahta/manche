<template>
<div class="h-auto ">

  <section>
    <div class=" items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
      <div class="w-full mx-auto text-left">
        <div class="relative flex-col items-center m-auto align-middle">
          <div class="items-center gap-12 text-left lg:gap-24 lg:inline-flex">
            <div class="flex flex-col m-auto md:order-first">
              <div class="max-w-xl">
                <div
                >
                  <p class="text-2xl uppercase font-medium tracking-tight text-black sm:text-4xl">
                    why?
                  </p>
                </div>
              </div>
              <div class="mt-6 lg:max-w-7xl">
                <ul class="grid grid-cols-2 gap-4 list-none lg:gap-6">
                  <li>
                    <div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Digital Transformation
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Invent the digital future - reduce costs, grow sales and improve customer experiences
                      changing needs of the tech industry, ensuring you'll always
                      be ahead.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Product Development
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Build successful products with the team that has done it first-hand Plus, our platform is constantly evolving to meet the
                      changing needs of the tech industry, ensuring you'll always
                      be ahead.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Data Analytics & AI
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Build your own AI models and apps like ChatGPT for next-level growth Plus, our platform is constantly evolving to meet the
                      changing needs of the tech industry, ensuring you'll always
                      be ahead.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Customer support
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the
                      changing needs of the tech industry, ensuring you'll always
                      be ahead.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div  class="order-first block w-full mt-12 aspect-square lg:mt-0 border border-black ">
              <img

                  class="object-cover object-center w-full mx-auto bg-gray-300 border lg:ml-auto" alt="some illustration " src="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script setup>
import AOS from "aos";
import {onMounted} from "vue";
onMounted(() => {
  AOS.init({
    duration: 1600,
  });

})


</script>
