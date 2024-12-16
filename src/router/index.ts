import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginPage.vue'
import AuthLayout from '../layouts/AuthLayout.vue';
import MainLayout from '../layouts/MainLayout.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView,
        meta: { requiresAuth: true }, // Trang này cần đăng nhập
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        meta: { requiresAuth: true }, // Trang này cần đăng nhập
      },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Middleware kiểm tra token
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token'); // Lấy token từ localStorage (hoặc trạng thái khác)

  if (to.meta.requiresAuth && !token) {
    // Nếu chưa đăng nhập, chuyển về trang login
    next({ name: 'Login' });
  } else if (to.name === 'Login' && token) {
    // Nếu đã đăng nhập, chuyển về Home
    next({ name: 'Home' });
  } else {
    next(); // Cho phép đi tiếp
  }
});

export default router
