import posts from '../apis/posts'
import { CREATE_POST, FETCH_POSTS, FETCH_POST, DELETE_POST } from './types'

const API_KEY = '?key=PAPER1234'

export const fetchPosts = async () => {
  const response = await posts.get(`/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: response.data,
  }
}
