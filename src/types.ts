import { Moment } from 'moment'

export type TimePeriod = 'today' | 'this week' | 'this month'

export interface Post {
  id: number
  title: string
  html: string
  markdown: string
  created: Moment
  authorId: number
}
