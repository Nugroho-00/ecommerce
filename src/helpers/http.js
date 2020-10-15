import {default as axios} from 'axios'

const {BACKEND_URL} = process.env

const http = (token=false)=>{
  return axios.create({
    baseURL: BACKEND_URL,
    headers: {
      'Authorization': token? `Bearer ${token}` : undefined
    }
  })
}

export default http