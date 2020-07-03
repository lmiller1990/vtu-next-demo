import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

export const posts = [
  { id: '1', title: 'Vue' },
  { id: '2', title: 'Vuex' },
  { id: '3', title: 'VueRouter' },
]

const Posts = {
  template: `
      <h1>Posts</h1>
      <router-link
        v-for="post in posts"
        :to="'/' + post.id"
        :key="post.id"
        :id="'post-' + post.id"
        data-test="link"
      >
        {{ post.title }}
      </router-link>

      <router-view />
    `,
  data() {
    return { posts }
  }
}

const Post = {
  template: `
      <h2>This is {{ post.title }}</h2>
    `,
  computed: {
    post() {
      return this.posts.find(post => post.id === this.$route.params.id)
    }
  },
  data() {
    return { posts }
  }
}

const App = {
  template: `<router-view />`
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Posts },
    { path: '/:id', component: Post },
  ]
})

test('renders a list of posts', async () => {
  router.push('/1')
  await router.isReady()

  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  })

  expect(wrapper.findAll('[data-test="link"]')).toHaveLength(3)
  await wrapper.find('#post-1').trigger('click')
  expect(wrapper.html()).toContain('This is Vue')
})
