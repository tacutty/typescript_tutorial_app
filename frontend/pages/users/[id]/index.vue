<template>
  <div>
    <p v-if="user"><strong>{{ user.name }}</strong>さんの投稿一覧</p>
    <h3>投稿一覧:</h3>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/users/${id}/posts/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

interface User {
  id: number;
  name: string;
  email: string;
  posts: Post[];
}

interface Post {
  id: number;
  title: string;
}

export default {
  setup() {
    const route = useRoute();
    const id = Number(route.params.id);

    // userの初期値をnullに設定
    const user = ref<User | null>(null);
    const posts = ref<Post[]>([]);

    onMounted(async () => {
      try {
        const userResponse = await fetch(`http://localhost:8080/users/${id}`);
        const userData = await userResponse.json();
        user.value = userData;
        posts.value = userData.Posts;
      } catch (error) {
        console.error(error);
      }
    });

    return {
      id,
      user,
      posts,
    };
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>