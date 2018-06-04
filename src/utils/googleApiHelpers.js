import axios from 'axios'
import { baseURL, apiKey } from '../config/googleApi.js'

const api = axios.create({
  baseURL,
  timeout: 2000,
})

export const locationName = (lat, lang) => api.get(`/json?latlng=${lat},${lang}&key=${apiKey}`)
