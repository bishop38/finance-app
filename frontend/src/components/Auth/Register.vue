<template>
  <div>
    <form @submit.prevent="handleRegister">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
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
    const username = ref('');
    const email = ref('');
    const password = ref('');

    const handleRegister = async () => {
      await authStore.register({ username: username.value, email: email.value, password: password.value });
      router.push('/login');
    };

    return { username, email, password, handleRegister };
  }
};
</script>