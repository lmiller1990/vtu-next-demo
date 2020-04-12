<template>
  <a class="panel-block" data-test="post">
    <div class="level">
      <div>
        <div>
          <a
            class="link"
          >
            {{ post.title }}
          </a>
        </div>
        {{ post.created.format('Do MMM') }}
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Post } from './types'

export default defineComponent({
  name: 'TimelineItem',

  props: {
    post: {
      type: Object as () => Post,
      required: true,
    }
  },

  setup(props, ctx) {
    const link = `/posts/${props.post.id}`

    return {
      link,
    }
  }
})
</script>

