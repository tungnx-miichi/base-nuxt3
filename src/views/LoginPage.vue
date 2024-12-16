<template>
  <div>
    <h1>Đăng nhập</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Tên đăng nhập" />
      <input v-model="password" type="password" placeholder="Mật khẩu" />
      <button type="submit">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

// Khai báo biến trạng thái
const username = ref<string>("");
const password = ref<string>("");
const router = useRouter();

// Hàm login
const login = () => {
  if (username.value === "admin" && password.value === "1234") {
    localStorage.setItem("token", "fake-jwt-token"); // Lưu token vào localStorage
    router.push({ name: "Home" }); // Chuyển về trang Home
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu");
  }
};
</script>
