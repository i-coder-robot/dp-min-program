import Taro from '@tarojs/taro'
import {Image, View, Text} from '@tarojs/components'

import './discount-item.scss'


function DiscountItem (props) {
  const item  = props.item
  return(
    <View className='discountItem'>
      <Image src={item.discountItemSrc} className='discountItemSrc'></Image>
      <View className='discountItemBelow'>
        <View className='discountItemTitle'>{item.discountItemTitle}</View>
        <View className='discountItemMid'>
          <Image src={item.discountItemIcon} className='discountItemIcon'></Image>
          <Text className='discountItemHotel'>{item.discountItemHotel}</Text>
        </View>
        <View className='discountItemBottom'>
          <View className='bottomPrice'>
            <Text className='discountItemGoodsPrice'>￥{item.discountItemGoodsPrice}</Text>
            <Text className='discountItemPrice'>￥{item.discountItemPrice}</Text>
          </View>
          <Text className='discount'>{item.discount}</Text>
        </View>
      </View>
    </View>
  )
}

export default DiscountItem
