import Taro,{useEffect} from '@tarojs/taro'
import {View,Image,Text} from '@tarojs/components'
import './subnav.scss'
import useApiRequest from "../../useApiRequest";
import {FETCHING,SUCCESS,ERROR} from '../../actions/actionTypes'

function SubNav () {
  const [{status,response},makeRequestApi] = useApiRequest(
    'http://localhost:9090/subNav'
  )

  useEffect(
    ()=>{
      makeRequestApi()
    },[]
  )
  return (
    <View className='subNav'>
      {
        status===SUCCESS && (response&&response.data.items.map(item=>(
          <View key={item.id} className='subNavItem'>
            <Image className='subNavImg' src={item.src} />
            <Text className='subNavTitle'>{item.title}</Text>
          </View>
        )))
      }
    </View>
  )
}
export default SubNav
