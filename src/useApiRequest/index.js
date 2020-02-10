import Taro,{useReducer,useCallback} from '@tarojs/taro'
import {fetching,success,error} from '../actions/actionCreators'
import reducer, {initialState} from "../reducers/reducer";


const useApiRequest = (endpoint, {verb = 'get',params={}}={})=>{
  const [state,dispatch] = useReducer(reducer,initialState)
  const makeRequest = useCallback(async () =>{
    dispatch(fetching())
    try{
      const response = await Taro.request({url:endpoint,method:verb,data:params})
      dispatch(success(response))
    }catch (e) {
      dispatch(error(e))
    }
  }, [endpoint, verb, params])
  return [state,makeRequest]
}
export default useApiRequest
