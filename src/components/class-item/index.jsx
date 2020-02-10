import Taro from '@tarojs/taro'
import {Image, View} from '@tarojs/components'

import './class-item.scss'

function ClassItem (props) {
  const item = props.item
  return (
    <View className='classItem'>
      <View><Image className='classItemSrc' src={item.src} /></View>
      <View className='classItemTitle'>{item.title}</View>
      <View className='classItemDesc'>{item.desc}</View>
    </View>
  )
}
export default ClassItem
