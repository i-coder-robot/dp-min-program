import Taro, {useState} from '@tarojs/taro'
import {View} from '@tarojs/components'

import { AtTabs, AtTabsPane } from 'taro-ui'

import './tabs.scss'
import TabsLeft from "./tabs-left";


function MyTabs () {


  // eslint-disable-next-line no-unused-vars
  const [tabList,setTabList] = useState([{ title: '附近上榜' }, { title: '全域上榜' }])

  const [current,setCurrent] = useState(0)

  return(
    <AtTabs current={current} tabList={tabList} onClick={(value)=>setCurrent(value)}>
      <AtTabsPane current={current} index={0} >
        {/*<View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>*/}
        <TabsLeft />
      </AtTabsPane>
      <AtTabsPane current={current} index={1}>
        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
      </AtTabsPane>
    </AtTabs>
  )
}

export default MyTabs;
