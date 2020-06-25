<template>
  <div>
    Vue app
    <Hello @greet="increment" />
    Count: {{ count }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hello from './Hello.vue'

export default defineComponent({
  name: 'App',

  components: {
    Hello
  },

  data() {
    return {
      count: 0
    }
  },

  methods: {
    increment() {
      this.count += 1
    }
  }
})
</script>
