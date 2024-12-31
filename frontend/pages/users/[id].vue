<template>
  <div>
    <p><strong>{{ person.name }}</strong>さんの投稿一覧</p>
    <h3>投稿一覧:</h3>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';

export default {
  setup() {
    // Reactive state for the user
    const person = reactive({
      id: 1,
      name: 'Sato',
      email: 'sato@example.com',
    });

    // Reactive state for posts
    const posts = reactive([
      { id: 1, title: '初めての投稿' },
      { id: 2, title: 'Vue.jsについて' },
      { id: 3, title: '新しいチャレンジ' },
    ]);

    // New post input
    const newPost = ref('');

    return {
      person,
      posts,
      newPost,
    };
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>