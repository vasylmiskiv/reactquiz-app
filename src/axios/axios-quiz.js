import axios from 'axios'

export default axios.create({
  baseURL: 'https://reactquiz-164b3.firebaseio.com/'
})