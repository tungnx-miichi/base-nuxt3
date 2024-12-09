// composables/useAuth.ts
import { login, getUserProfile } from '~/services/userService';

export const useAuth = () => {
    const token = useCookie('token');
    const loginUser = async (email: string, password: string) => {
        try {
            const data = await login({ email, password });
            token.value = data.token; // Lưu token vào cookie
            return data;
        } catch (error) {
            console.error('Login failed:', error);
            token.value = 'fake token tungnx '; // Lưu token vào cookie
            useRouter().push("/");
            throw error;
        }
    };

    const infoUser = async () => {
        try {
            const data = await getUserProfile();
            return data;
        } catch (error) {
            console.error('GetUser failed:', error);
            throw error;
        }
    };

    return { loginUser, infoUser };
};
