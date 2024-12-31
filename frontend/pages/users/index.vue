<template>
  <div>
    <h1>Users Page</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <NuxtLink :to="`/users/${user.id}`">{{ user.name }}</NuxtLink>
        : {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

// ユーザーの型定義
interface User {
  id: number;
  name: string;
  email: string;
}

export default {
  setup() {
    // ユーザー配列の型指定
    const users = ref<User[]>([]);

    // Fetch users
    onMounted(async () => {
      try {
        const response = await fetch('http://localhost:8080/users');
        users.value = await response.json();
      } catch (error) {
        console.error(error);
      }
    });

    return {
      users,
    };
  },
};
</script>

<style scoped>
a {
  color: rgba(15, 61, 129, 0.783);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>