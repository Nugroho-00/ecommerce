const initialState = {
  data: {},
  isLogin: false,
  isLoading: false,
  isError: false,
  alertMsg: ''
}

export default (state=initialState, action)=>{
  switch(action.type){
    case 'GET_PROFILE_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'GET_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data'
      }
    }
    case 'GET_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        data: action.payload.data.data[0]
      }
    }
    default : {
      return state
    }
  }
}