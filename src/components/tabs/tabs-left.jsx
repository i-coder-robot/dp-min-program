import Taro,{useState,useEffect} from '@tarojs/taro'
import {View,} from '@tarojs/components'

import './tabs-left.scss'
import TabsItem from "./tabs-item";
import useApiRequest from "../../useApiRequest";


function TabsLeft () {
  const [{status,response},makeRequestApi] = useApiRequest('http://localhost:9090/restaurantTabItem')

  useEffect(()=>{
   makeRequestApi()
  },[])
  return(
    <View className='tabs-left'>
      {
        status===SUCCESS &&(
          response&&response.data.items.map(item=>(
            <TabsItem key={item.id} Item={item} />
          ))
        )
      }
    </View>
  )
}
export default TabsLeft
