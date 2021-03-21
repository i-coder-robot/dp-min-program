import Taro,{useEffect} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import useApiRequest from "../../useApiRequest";
import {FETCHING,SUCCESS,ERROR} from '../../actions/actionTypes'

function Test () {
  const [{status,response},makeNavRequest] = useApiRequest(
    'http://localhost:9090/nav'
  )

  useEffect(
    ()=>{
      makeNavRequest()
    },[]
  )

  return (
    <View>
      <Text>{console.log(response)}</Text>
      {status===FETCHING ? 'Fetching......':''}
      {status===SUCCESS ? <View>{response.data.items.map(item=>(
        <View key={item.id} className='navItem'>
          <Text className='title'>{item.title}</Text>
        </View>))
      }</View>:''}
      {status===ERROR?<View>JSON.stringify(response)</View>:''}
    </View>
  )
}
export default Test
