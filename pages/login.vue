<template>
  <form @submit.prevent="login">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <input
      v-model="email"
      type="email"
      placeholder="Email"
      class="border p-2 mb-2 w-full"
    />
    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="border p-2 mb-4 w-full"
    />
    <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full">
      Login
    </button>
  </form>
</template>

<script setup>
import { useAuth } from "~/composables/useAuth";

definePageMeta({
  layout: "noAuth",
});
const { loginUser } = useAuth();

const email = ref("");
const password = ref("");

async function login() {
  const response = await loginUser("user@example.com", "password123");
  console.log("Login successful:", response);
  // Điều hướng về trang home
  useRouter().push("/");
}
</script>
