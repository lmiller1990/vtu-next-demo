<template>
  <nav class="panel is-primary">
    <p class="panel-tabs">
      <a 
        v-for="tab in tabs" 
        :key="tab" 
        :class="[ tab === activeTab ? 'is-active' : '']"
        :data-test="tab"
        @click="setActiveTab(tab)"
      >
        {{ tab }}
      </a>
    </p>

    <TimelineItem v-for="post in posts" :key="post.id" :post="post" />
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"

import { today, thisWeek, thisMonth } from './mocks'
import { TimePeriod } from './types'
import { filterPosts } from './timelineUtils'
import TimelineItem from './TimelineItem.vue'

export default defineComponent({
  components: {
    TimelineItem
  },

  setup() {
    const tabs: TimePeriod[] = ['today', 'this week', 'this month']
    const activeTab = ref<TimePeriod>('today')

    const posts = computed(() => {
      return filterPosts([today, thisWeek, thisMonth], activeTab.value)
    })

    const setActiveTab = (tab: TimePeriod) => {
      activeTab.value = tab
    }

    return {
      tabs,
      setActiveTab,
      activeTab,
      posts
    }
  }
})
</script>