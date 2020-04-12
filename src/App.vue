<template>
  <div>
    <section class="section">
      <div class="container">
        <Timeline />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Timeline from './Timeline.vue'

export default defineComponent({
  name: 'App',

  components: {
    Timeline
  }
})
</script>