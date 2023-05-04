import axios from 'axios'

const Instance = axios.create({
  withCredentials: true,
  baseURL: '/api',
  timeout: 2000,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json'
  }
})

export default Instance
