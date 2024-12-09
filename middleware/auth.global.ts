// middleware/auth.ts

export default defineNuxtRouteMiddleware((to, from) => {
    console.log('vao check auth');

    // Lấy token từ localStorage (hoặc từ cookie nếu bạn sử dụng cookie)
    const token = useCookie('token').value; // Lấy token từ cookie


    // Nếu không có token và đang cố gắng truy cập vào các trang yêu cầu login
    if (!token && to.path !== '/login') {
        return navigateTo('/login');  // Điều hướng đến trang login
    }

    // Nếu có token và đang cố gắng truy cập trang login, điều hướng về trang home
    if (token && to.path === '/login') {
        return navigateTo('/');  // Điều hướng về trang home
    }
});
