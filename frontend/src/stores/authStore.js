import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token') || '',
    }),
    actions: {
        async login(credentials) {
            const response = await axios.post('/api/auth/login', credentials);
            this.token = response.data.token;
            localStorage.setItem('token', this.token);
        },
        async register(userInfo) {
            await axios.post('/api/auth/register', userInfo);
        },
        logout() {
            this.user = null;
            this.token = '';
            localStorage.removeItem('token');
        }
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
});