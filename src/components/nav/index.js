import Taro,{useEffect} from '@tarojs/taro'
import {View,Image,Text} from '@tarojs/components'
import SubNav from '../subnav'
import './nav.scss'
import useApiRequest from "../../useApiRequest";
import {FETCHING,SUCCESS,ERROR} from '../../actions/actionTypes'

function Nav () {
  const [{status,response},makeRequestApi] = useApiRequest(
    'http://localhost:8080/nav'
  )

  useEffect(
    ()=>{
      makeRequestApi()
    },[]
  )

  return (
    <View className='nav'>
      { status === SUCCESS && (
        response && response.data.items.map(item=>(
          <View key={item.id} className='navItem'>
            <Image className='img' src={item.src} />
            <Text className='title'>{item.title}</Text>
          </View>))
        )
      }
      <SubNav></SubNav>
    </View>
  )
}

export default Nav
