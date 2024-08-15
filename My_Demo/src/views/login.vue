<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold text-gray-700">Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="email"
              placeholder="example@gmail.com"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold text-gray-700">Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="password"
              placeholder="Example"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            class="py-3 text-center w-full bg-gray-700 text-white font-bold rounded-lg"
            type="submit"
          >
            Sign In
          </button>
          <button
            v-else
            class="py-3 text-center w-full bg-gray-500 text-white font-bold rounded-lg cursor-not-allowed"
            type="button"
            disabled
          >
            Sign In...
          </button>
        </div>
      </form>

      <!-- Start error -->
      <div v-if="error" class="text-left mt-4 text-red-600">
        <span>{{ error }}</span>
      </div>

      <!-- Start direction -->
      <div class="w-full text-center mt-6">
        <span class="ml-1"
          ><router-link
            :to="{ name: 'Register', params: {} }"
            class="text-gray-700 font-bold"
            >Sign Up</router-link
          ></span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useSignIn } from "@/composables/useSignIn";
export default {
  setup() {
    const router = useRouter();
    const { error, isPending, signIn } = useSignIn();
    const email = ref("");
    const password = ref("");
    async function onSubmit() {
      await signIn(email.value, password.value);
      if (!error.value) router.push({ name: "Profile", params: {} });
    }
    return {
      onSubmit,
      email,
      password,
      error,
      isPending,
    };
  },
};
</script>
