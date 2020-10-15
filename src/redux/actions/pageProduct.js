import {default as axios} from 'axios'

export default {
  getData: (id)=>({
    type: 'GET_DATA',
    payload: axios.get(`http://localhost:8000/public/home/${id}`)
  }),
  increaseCount: {
    type: 'INCREASE_COUNTER'
  },
  decreaseCount: {
    type: 'DECREASE_COUNTER'
  }
}