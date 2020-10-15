import {default as axios} from 'axios'

export default {
  getData: ()=>({
    type: 'GET_DATA',
    payload: axios.get('http://localhost:8000/public/home')
  })
  // getPopular: () => {
  //   return {
  //     type: 'POPULAR',
  //     payload: axios.get('http://localhost:8000/public/home?limit=5&sort[createdAt]=asc')
  //   }
  // }
}