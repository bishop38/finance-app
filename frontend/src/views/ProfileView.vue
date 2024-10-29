<template>
  <div>
    <h1>Profile</h1>
    <div>
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore';
import { computed } from 'vue';

export default {
  setup() {
    const authStore = useAuthStore();
    const user = computed(() => authStore.user);

    return { user };
  },
};
</script>

<style scoped>
</style>