<template>
  <div>
    <p v-if="post"><strong>{{ post.title }}</strong></p>
    <p v-if="post">{{ post.content }}</p>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default {
  setup() {
    const route = useRoute();
    const id = Number(route.params.id);

    const post = ref<Post | null>(null);

    onMounted(async () => {
      try {
        const postResponse = await fetch(`http://localhost:8080/post/${id}`);
        const postData = await postResponse.json();
        post.value = postData;
      } catch (error) {
        console.error(error);
      }
    });

    return {
      id,
      post,
    };
  },
};
</script>

<style>
/* Add any necessary styles here */
</style>