<template>
  <div class="layout">
    <!-- Header cố định -->
    <Header class="header"></Header>

    <!-- Nội dung cuộn -->
    <main class="content">
      <!-- Sidebar -->
      <div class="flex">
        <aside class="w-64 bg-blue-600 text-white p-4">
          <h2 class="text-xl font-bold mb-4">Sidebar</h2>
          <nav>
            <ul>
              <li><NuxtLink to="/">Trang chủ</NuxtLink></li>
              <li>
                <NuxtLink to="/profile">Thông tin cá nhân</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact">contact</NuxtLink>
              </li>
            </ul>
          </nav>
        </aside>

        <NuxtPage />
      </div>
      <BaseSnackbar />
    </main>
  </div>
</template>

<script setup lang="ts">
// Đây là layout sau login
</script>

<style scoped>
/* Tùy chỉnh thêm CSS nếu cần */
/* CSS */
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Chiều cao toàn màn hình */
  overflow: hidden; /* Loại bỏ cuộn ở layout chính */
}

.header {
  height: 60px;
  position: fixed; /* Header cố định */
  top: 0;
  left: 0;
  width: 100%; /* Chiều rộng đầy đủ */
  background-color: #3498db;
  color: white;
  text-align: center;
  padding: 10px;
  z-index: 10; /* Đảm bảo luôn nằm trên */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content {
  margin-top: 60px; /* Đẩy nội dung xuống dưới header */
  height: calc(100vh - 60px); /* Chiều cao còn lại sau header */
  overflow-y: auto; /* Cho phép cuộn */
  background-color: #f4f4f4;
}
</style>
