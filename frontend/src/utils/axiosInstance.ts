import axios from "axios"

const Instance = axios.create({
  withCredentials: true,
  baseURL: '/api',
  headers: {
    'Cache-Control': 'no-cache',
    "Content-Type": "application/json"
  }
})

export default Instance