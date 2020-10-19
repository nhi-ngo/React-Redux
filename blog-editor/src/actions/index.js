import posts from '../apis/posts'
import { CREATE_POST, FETCH_POSTS, FETCH_POST, DELETE_POST } from './types'

const API_KEY = '?key=NHI1234'

export const fetchPosts = async () => {
  const response = await posts.get(`/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: response.data,
  }
}

export const createPost = async (formValues) => {
  const response = await posts.post(`/posts${API_KEY}`, formValues)

  return {
    type: CREATE_POST,
    payload: response.data,
  }
}

export const fetchPost = async (id) => {
  const response = await posts.get(`posts/${id}${API_KEY}`)

  return {
    type: FETCH_POST,
    payload: response.data,
  }
}

export const deletePost = async (id) => {
  const response = await posts.delete(`posts/${id}${API_KEY}`)

  return {
    type: DELETE_POST,
    payload: id,
  }
}
