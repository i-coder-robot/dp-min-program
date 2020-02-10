import Taro,{useState} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import './bottom-nav.scss'

function BottomNav () {
  const [bottomCurrent,setBottomCurrent] = useState(0)

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
      Taro.switchTab({url: '../pages/home/index'})
    }
    else if(value==1){
      Taro.switchTab({url:'../pages/discount/index'})
    }
    else if(value==2){
      Taro.switchTab({url:'../pages/restaurant/index'})
    }
    else if(value==3){
      Taro.switchTab({url:'/pages/me/index'})
    }
  }
  return (
    <View>
      <Text>BottomNav</Text>
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

export default BottomNav
