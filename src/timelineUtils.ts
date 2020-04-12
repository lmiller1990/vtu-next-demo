import moment from 'moment'
import { Post, TimePeriod } from './types'

export function filterPosts(posts: Post[], timePeriod: TimePeriod): Post[] {
  if (timePeriod === 'today') {
    return posts.filter(post => {
      return post.created.isSameOrAfter(moment().subtract(1, 'day'))
    })
  }

  if (timePeriod === 'this week') {
    return posts.filter(post => {
      return post.created.isSameOrAfter(moment().subtract(7, 'days'))
    })
  }

  return posts
}
