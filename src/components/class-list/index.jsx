import Taro, {useState, useEffect} from '@tarojs/taro'
import {View} from '@tarojs/components'
import ClassItem from "../class-item";
import './class-list.scss'
import useApiRequest from "../../useApiRequest";
import {FETCHING, SUCCESS, ERROR} from '../../actions/actionTypes'

function ClassList () {
  const [{status, response}, makeRequestApi] = useApiRequest('http://localhost:9090/restaurantBillBoard')
  useEffect(() => {
    makeRequestApi()
  }, [])
  return (
    <View>
      <View className='classHead'>精品榜单</View>
      <View className='classList'>
        {
          status === SUCCESS && (
            response && response.data.items.map(item => (
              <ClassItem key={item.id} item={item} />
            ))
          )
        }
      </View>
    </View>
  )
}

export default ClassList
