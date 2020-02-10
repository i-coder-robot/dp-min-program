import Taro,{useState} from '@tarojs/taro'
import {View} from '@tarojs/components'
import ScrollList from '../../components/scroll-list'
import ClassList from "../../components/class-list";
import MyTabs from "../../components/tabs";
import {AtTabBar} from "taro-ui";
import './restaurant.scss'


function Restaurant () {

  const [bottomCurrent,setBottomCurrent] = useState(2)

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
    }
    else if(value==1){
      Taro.navigateTo({url:'/pages/discount/index'})
    }
    else if(value==3){
      Taro.navigateTo({url:'/pages/me/index'})
    }
  }

  return(
    <View>
      <ScrollList />
      <ClassList />
      <MyTabs />
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

export default Restaurant
