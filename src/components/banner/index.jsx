import Taro from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import './banner.scss'

function Banner () {
  return (
    <View className='banner'>
      <Image className='bannerImg' src='http://localhost:8080/image?imageName=banner' />
    </View>
  )
}
export default Banner
