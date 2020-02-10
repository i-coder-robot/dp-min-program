import Taro from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'

import './me-item.scss'

function MeItem (props) {
  const meItem = props.Item
  return (
    <View className='meItem'>
      <View>
        <Image src={meItem.src} className='meItemSrc' />
      </View>
      <View>
        <Text className='meItemTitle'>{meItem.title}</Text>
      </View>
    </View>
  )
}

export default MeItem
