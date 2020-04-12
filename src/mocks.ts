import moment from 'moment'

import { Post } from './types'

export const mockPost: Post = {
  id: 1,
  title: 'My great post',
  html: `<p>Some interesting content</p>\n`,
  markdown: 'Some interesting content',
  created: moment(),
  authorId: 1,
}

export const today: Post = {
  ...mockPost,
  title: 'Post from today'
}

export const thisWeek: Post = {
  ...mockPost,
  title: 'Post from this week',
  created: moment().subtract(3, 'days')
}

export const thisMonth: Post = {
  ...mockPost,
  title: 'Post from this months',
  created: moment().subtract(2, 'weeks')
}