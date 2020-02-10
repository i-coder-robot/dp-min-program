import Taro,{useState} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'
import { AtIcon,AtSearchBar } from 'taro-ui'
import './search.scss'

function Search () {
  // eslint-disable-next-line no-unused-vars
  const [searchWord, setSearchWord] = useState('输入商户名、地点、找优惠')

  return (
    <View className='searchRow'>
      <View className='pos'>
        <Text>北京</Text>
        <AtIcon value='chevron-down' size='16' color='#000'></AtIcon>
      </View>
      <View className='searchBar'>
        <AtSearchBar
          value=''
          onChange={setSearchWord}
        />
      </View>
    </View>
  )
}
export default Search
