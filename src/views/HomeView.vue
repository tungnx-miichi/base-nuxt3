<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  localStorage.removeItem("token"); // Xóa token
  router.push({ name: "Login" }); // Chuyển về trang Login
};
</script>

<template>
  <main>
    <div>
      <h1>Trang Home</h1>
      <button @click="logout">Đăng xuất</button>
      <div class="flex">
        <p>1</p>
        <p>2</p>
      </div>
    </div>
    <TheWelcome />
  </main>
</template>
