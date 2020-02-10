import Taro, {useState} from '@tarojs/taro'
import { View } from '@tarojs/components'
import DiscountLeft from "../../components/discount-left";
import DiscountRight from "../../components/discount-right";
import {AtTabBar} from "taro-ui";

import './index.scss'

function Discount () {

  const [bottomCurrent,setBottomCurrent] = useState(1)

  // eslint-disable-next-line no-unused-vars
  const [tabList,setTabList] = useState([
    { title: '首页',iconType:'folder'},
    { title: '找优惠',iconType:'sketch'},
    { title: '找好店',iconType:'bookmark'},
    { title: '我的',iconType:'user'}
  ])
  const handleBottomNavClick=(value)=>{
    setBottomCurrent(value)
    if (value==0){
      Taro.navigateTo({url: '/pages/home/index'})
    } else if(value==2){
      Taro.navigateTo({url:'/pages/restaurant/index'})
    } else if(value==3){
      Taro.navigateTo({url:'/pages/me/index'})
    }
  }

  return(
    <View className='discount'>
      <DiscountLeft />
      <DiscountRight />
      <AtTabBar
        fixed
        selectedColor='#fc673d'
        tabList={tabList}
        onClick={handleBottomNavClick}
        current={bottomCurrent}
      />
    </View>
  )
}

export default Discount
