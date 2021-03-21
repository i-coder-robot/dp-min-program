import Taro, {useState,useEffect} from '@tarojs/taro'
import {View, ScrollView} from '@tarojs/components'
import ScrollItem from '../scroll-item'
import './scroll-list.scss'
import useApiRequest from "../../useApiRequest";
import {FETCHING,SUCCESS,ERROR} from '../../actions/actionTypes'

function ScrollList () {
  const [{status,response},makeRequestApi] = useApiRequest('http://localhost:9090/restaurantNav')
  useEffect(()=>{
    makeRequestApi()
  },[])
  return (
    <View className='scrollList'>
      <View className='scrollHead'>美食排行榜</View>
      <ScrollView scrollX scrollWithAnimation lowerThreshold='10' upperThreshold='10' style='width:100%; height: 120px;'>
        {
          status===SUCCESS && (
            response && response.data.items.map(item => (
              <ScrollItem key={item.id} Item={item} />
            ))
          )

        }
      </ScrollView>
    </View>
  )
}

export default ScrollList
