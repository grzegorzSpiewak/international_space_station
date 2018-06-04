import axios from 'axios'

const baseURL = 'https://api.wheretheiss.at/v1/'

const api = axios.create({
  baseURL,
  timeout: 2000,
})

export const getIssLocation = (id) => api.get(`/satellites/${id}`)
