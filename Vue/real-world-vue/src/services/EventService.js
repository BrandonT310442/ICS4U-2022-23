import axios from 'axios'
 
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/BrandonT310442/ICS4U-2022-23',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
 
export default {
  getEvents() {
    return apiClient.get('/events')
  },

  getEvent(id) {
    return apiClient.get('/events/' + id)
  }

}
