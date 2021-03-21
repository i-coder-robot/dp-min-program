import Taro,{useState,useEffect} from '@tarojs/taro'
import {View,Text,Image} from '@tarojs/components'

import './me.scss'
import MeItem from "./me-item";

import {AtTabBar} from "taro-ui";
import useApiRequest from "../../useApiRequest";
import {FETCHING,SUCCESS,ERROR} from '../../actions/actionTypes'

function Me () {

  const [{status,response},makeRequestApi] = useApiRequest('http://localhost:9090/me')
  useEffect(()=>{
    makeRequestApi()
  },[])

  const [bottomCurrent,setBottomCurrent] = useState(3)

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
    else if(value==2){
      Taro.navigateTo({url:'/pages/restaurant/index'})
    }
  }

  return(
    <View className='me'>
      {status===SUCCESS &&(
        <View>
          <View className='firstLine'>
            <View className='firstLineLeft'>
              <View className='meIconBg'>
                <Image src={response.data.items.headPic} className='meIcon' />
              </View>
              <View>
                <View className='profile'>
                  <View><Text className='userName'>欢喜哥</Text></View>
                  <View className='level'><Text>Lv2</Text></View>
                </View>
                <View className='profileSex'>北京 男</View>
              </View>
            </View>
            <View>
              <Text className='homepage'>个人主页</Text>
              <Image src={response.data.items.arrow} className='arrow' />
            </View>
          </View>
          <View className='meHead'>
            <View className='secondLine'>
              <View className='secondLineLeft'>
                <View className='card'>
                  <View>
                    <Image className='profile' src={response.data.items.profile} />
                  </View>
                  <View className='words'>
                    <Text className='mingpian'>我的点评名片</Text>
                    <Text className='morePeople'>让更多人认识你</Text>
                  </View>
                </View>
                <View className='fensi'><Text>粉丝 2 |</Text></View>
              </View>
              <View className='codeArea'>
                <Image className='code' src={response.data.items.myCode} />
                <Image className='arrow' src={response.data.items.arrow} />
              </View>
            </View>
          </View>
          <View>
            <View className='titleHead'>我的订单</View>
            <View className='myOrders'>
              {
                response && response.data.items.items1.map(item=>(
                  <MeItem key={item.id} Item={item} />
                ))
              }
            </View>
            <View className='titleHead'>必备工具</View>
            <View className='myOrders'>
              {
                response&& response.data.items.items2.map(item=>(
                  <MeItem key={item.id} Item={item} />
                ))
              }
            </View>
          </View>
          <View className='meOthers'>
            <View className='meItemRow'>
              <Text>优惠券</Text>
              <Image className='rightArrow' src={response.data.items.arrow} />
            </View>
            <View className='meItemRow'>
              <Text>收藏</Text>
              <Image className='rightArrow' src={response.data.items.arrow} />
            </View>
            <View className='meItemRow'>
              <View className='settings'>
                <Text>设置</Text>
                <Text className='modifyMobile'>修改手机号</Text>
              </View>
              <Image className='rightArrow' src={response.data.items.arrow} />
            </View>
            <View className='meItemRow'>
              <Text>意见反馈</Text>
              <Image className='rightArrow' src={response.data.items.arrow} />
            </View>
          </View>
          <AtTabBar
            fixed
            selectedColor='#fc673d'
            tabList={tabList}
            onClick={handleBottomNavClick}
            current={bottomCurrent}
          />
        </View>
      )}
    </View>
  )
}

export default Me
