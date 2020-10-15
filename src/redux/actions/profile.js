// import {default as axios} from 'axios'
import http from '../../helpers/http'
// import qs from 'querystring'

export default {
  getProfile: (token)=>{
    return {
      type: 'GET_PROFILE',
      payload: http(token).get('http://localhost:8000/customer/profile')
    }
  }
  // updateProfile: (token, data) => {
  //   return {
  //     type: 'GET_PROFILE',
  //     payload: http(token).patch('http://localhost:8000/customer/profile/:id', qs.stringify(data))
  //   }
  // }
}