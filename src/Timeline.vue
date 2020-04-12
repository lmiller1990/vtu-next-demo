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
  </nav> 
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"

import { today, thisWeek, thisMonth } from './mocks'
import { TimePeriod } from './types'

export default defineComponent({
  setup() {
    const tabs: TimePeriod[] = ['today', 'this week', 'this month']
    const activeTab = ref<TimePeriod>('today')

    const posts = computed(() => {
      return [today, thisWeek, thisMonth]
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