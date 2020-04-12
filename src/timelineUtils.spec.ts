import { Post } from './types'

import { thisWeek, today } from './mocks'
import { filterPosts } from './timelineUtils'

describe('filterPosts', () => {
  it('filters posts from today', () => {
    const actual = filterPosts([today, thisWeek], 'today') 
    const expected: Post[] = [today]

    expect(actual).toEqual(expected)
  })

  it('filters posts from this week', () => {
    const actual = filterPosts([today, thisWeek], 'this week') 
    const expected: Post[] = [today, thisWeek]

    expect(actual).toEqual(expected)
  })
})
