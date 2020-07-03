<template>
  <h1>Posts</h1>
  <router-link v-for="post in posts" :to="`/${post.id}`" :key="post.id" id="`post-${post.id}`">
    {{ post.title }}
  </router-link>
  <router-view />
</template>

<script lang="ts">
import { posts } from './posts'

export default {
  data() {
    return {
      posts
    }
  }
}
</script>
