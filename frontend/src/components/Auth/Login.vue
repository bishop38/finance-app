<template>
  <div>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '../../stores/authStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const email = ref('');
    const password = ref('');

    const handleLogin = async () => {
      await authStore.login({ email: email.value, password: password.value });
      await router.push('/dashboard');
    };

    return { email, password, handleLogin };
  }
};
</script>