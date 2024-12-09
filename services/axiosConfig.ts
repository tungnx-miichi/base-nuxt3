import axios from 'axios';
const { showSnackbar } = useSnackbar();


// Khởi tạo instance Axios
const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL || 'https://api.example.com', // URL gốc
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // Timeout (ms)
});

// Request Interceptor: Thêm token vào headers nếu có
axiosInstance.interceptors.request.use(
    (config) => {
        const token = useCookie('token').value; // Lấy token từ cookie
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor: Xử lý lỗi
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Kiểm tra mã lỗi và xử lý nếu cần
        console.log('error api', error);
        showSnackbar('error api', 'error')

        if (error.response?.status === 401) {
            // Ví dụ: Redirect về login nếu token hết hạn
            navigateTo('/login');
        }
        return Promise.reject(error);
    }
);

const apiServices = {
    post(urlApi: string, params?: any, config?: any) {
        return axiosInstance.post(urlApi, params, config);
    },
    put(urlApi: string, params?: any) {
        return axiosInstance.put(urlApi, params);
    },
    patch(urlApi: string, params?: any) {
        return axiosInstance.patch(urlApi, params);
    },
    get(urlApi: string, params?: any) {
        return axiosInstance.get(urlApi, { params });
    },
    getBlob(urlApi: string, params?: any) {
        return axiosInstance.get(urlApi, { params, responseType: 'blob' });
    },
    delete(urlApi: string, params?: any) {
        return axiosInstance.delete(urlApi, { data: params });
    },
};

export default apiServices;
