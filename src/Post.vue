<template>
  <h2>This is {{ post.title }}</h2>
</template>

<script lang="ts">
import { posts } from './posts'

export default {
  computed: {
    post() {
      return posts.find(post => post.id === this.$route.params.id)
    }
  }
}
</script>
