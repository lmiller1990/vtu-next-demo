<template>
  <div>Hello world <button @click="greet">Greet</button></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hello',

  methods: {
    greet() {
      this.$emit('greet')
    }
  }
})
</script>
