import axios from 'axios'

const http = axios.create({
  baseURL: 'https://tokigames-challenge.herokuapp.com/api'
})

export default http