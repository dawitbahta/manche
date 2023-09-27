<template>
  <div class="bg-red-600">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 z-20">
      <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div
          class="rounded-l max-h-[60vh] z-20 p-8 shadow-lg lg:col-span-3 lg:p-12"
        >
          <form class="space-y-4" novalidate @submit.prevent="submitForm">
            <div>
              <label class="sr-only" for="name">Name</label>
              <input
                id="name"
                v-model="formData.name"
                class="w-full rounded-lg border border-green-200 !outline-none p-3 text-sm"
                placeholder="Name"
                type="text"
              />
              <div v-if="showNameError" class="text-red-500 text-sm mt-1">
                {{ nameError }}
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">Email</label>
                <input
                  id="email"
                  v-model="formData.email"
                  class="w-full border border-green-200 !outline-none rounded-lg p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                />
                <div v-if="showEmailError" class="text-red-500 text-sm mt-1">
                  {{ emailError }}
                </div>
              </div>

              <div>
                <label class="sr-only" for="phone">Phone</label>
                <input
                  id="phone"
                  v-model="formData.phone_no"
                  class="border border-green-200 !outline-none w-full rounded-lg p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                />
                <div v-if="showPhoneError" class="text-red-500 text-sm mt-1">
                  {{ phoneError }}
                </div>
              </div>
            </div>

            <div>
              <label class="sr-only" for="message">Message</label>

              <textarea
                id="message"
                v-model="formData.content"
                class="w-full rounded-lg border border-green-200 !outline-none p-3 text-sm"
                placeholder="Message"
                rows="8"
              ></textarea>
              <div v-if="showMessageError" class="text-red-500 text-sm mt-1">
                {{ messageError }}
              </div>
            </div>

            <div class="mt-4">
              <button
                class="shadow-md font-medium my-5 py-2 px-4 text-white cursor-pointer bg-green-500 hover:bg-green-600 rounded text-lg text-center w-32"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- notification  -->
    <div class="relative">
      <div
        v-if="showNotification"
        class="bg-white/20 backdrop-blur-xl z-20 max-w-md absolute right-5 bottom-1 rounded-lg p-3 shadow-lg"
      >
        <button
          class="absolute top-0 right-1.5 text-green-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
          type="button"
          @click="showNotification = !showNotification"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
        <h1 class="text-md text-slate-700 font-medium pt-3 mr-2">
          Thank you,{{ name }}! We've received your message and will be in touch
          soon. We appreciate your interest in working with us.
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import axios from "axios";

const showNotification = ref(false);
const showNameError = ref(false);
const showEmailError = ref(false);
const showPhoneError = ref(false);
const showMessageError = ref(false);
const nameError = ref("");
const emailError = ref("");
const phoneError = ref("");
const messageError = ref("");
const name = ref();
const response = ref();
const formData = ref({
  name: "",
  email: "",
  phone_no: "",
  content: "",
});

function validateForm() {
  let valid = true;
  // Validate name
  if (!formData.value.name.trim()) {
    nameError.value = "Please enter your name.";
    showNameError.value = true;
    valid = false;
  } else {
    nameError.value = "";
    showNameError.value = false;
  }

  // Validate email
  if (!formData.value.email.trim()) {
    emailError.value = "Please enter your email address.";
    showEmailError.value = true;
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.value.email)) {
    emailError.value = "Please enter a valid email address.";
    showEmailError.value = true;
    valid = false;
  } else {
    emailError.value = "";
    showEmailError.value = false;
  }

  // Validate phone
  if (!formData.value.phone_no.trim()) {
    phoneError.value = "Please enter your phone number.";
    showPhoneError.value = true;
    valid = false;
  } else {
    phoneError.value = "";
    showPhoneError.value = false;
  }

  // Validate message
  if (!formData.value.content.trim()) {
    messageError.value = "Please enter your message.";
    showMessageError.value = true;
    valid = false;
  } else {
    messageError.value = "";
    showMessageError.value = false;
  }
  return valid;
}

function submitForm() {
  const contactMessage = new FormData();
  contactMessage.append("name", formData.value.name);
  contactMessage.append("email", formData.value.email);
  contactMessage.append("phone_no", formData.value.phone_no);
  contactMessage.append("content", formData.value.content);

  if (validateForm()) {
    axios
      .post("http://127.0.0.1:8000/api/add-message", contactMessage)
      .then((r) => {
        response.value = r.data;
        showNotification.value = true;
        setTimeout(() => {
          showNotification.value = false;
        }, 7000);
        name.value = formData.value.name;
        formData.value.name = "";
        formData.value.email = "";
        formData.value.phone_no = "";
        formData.value.content = "";
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>