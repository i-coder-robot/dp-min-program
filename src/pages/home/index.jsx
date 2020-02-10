import Taro,{useState,useEffect} from '@tarojs/taro'
import {Text, View} from '@tarojs/components'
import {AtTabBar} from "taro-ui";
import Search from "../../components/search";
import Nav from "../../components/nav";
import Banner from "../../components/banner";
import AD from "../../components/ad";
import Guess from "../../components/guess";

function Home() {
  const [bottomCurrent,setBottomCurrent] = useState(0)
  useEffect(()=>{
    return ()=>{
      // Taro.hideTabBar()
    }
  })
  // eslint-disable-next-line no-unused-vars
  const [tabList,setTabList] = useState([
    { title: '首页',iconType:'folder'},
    { title: '找优惠',iconType:'sketch'},
    { title: '找好店',iconType:'bookmark'},
    { title: '我的',iconType:'user'}
  ])
  const handleBottomNavClick=(value)=>{
    setBottomCurrent(value)
    if(value==1){
      Taro.navigateTo({url:'/pages/discount/index'})
    }
    else if(value==2){
      Taro.navigateTo({url:'/pages/restaurant/index'})
    }
    else if(value==3){
      Taro.navigateTo({url:'/pages/me/index'})
    }
  }
  return (
    <View>
      <Search />
      <Nav />
      <Banner />
      <AD />
      <Guess />
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

export default Home
