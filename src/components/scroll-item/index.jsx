import Taro from '@tarojs/taro'
import {View,Image} from '@tarojs/components'

import './scroll-item.scss'


function ScrollItem (props) {
  const scrollItem = props.Item
  return(
    <View className='scrollItem'>
        <View className='scrollItemTitle'>{scrollItem.title}</View>
        <View className='scrollItemDesc'>{scrollItem.desc}</View>
        <View><Image className='scrollItemImg' src={scrollItem.src} /></View>
    </View>
  )
}
export default ScrollItem
