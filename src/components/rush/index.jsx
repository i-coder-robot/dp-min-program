import Taro, {useState, useEffect} from '@tarojs/taro'
import {View, Text, Image} from "@tarojs/components";
import './rush.scss'
import useApiRequest from "../../useApiRequest";
import {FETCHING, SUCCESS, ERROR} from '../../actions/actionTypes'

function Rush () {
  const [{status, response}, makeRequestApi] = useApiRequest(
    'http://localhost:9090/rush')
  // eslint-disable-next-line no-unused-vars
  const [rushTime, setRushTime] = useState('01')
  // eslint-disable-next-line no-unused-vars
  const [rushTimeSymbol, setRushTimeSymbol] = useState(':')
  // eslint-disable-next-line no-unused-vars
  const [rushTime1, setRushTime1] = useState('00')
  // eslint-disable-next-line no-unused-vars
  const [rushTime2, setRushTime2] = useState('00')

  useEffect(() => {
    makeRequestApi()
  }, [])

  return (
    <View className='rushItem'>
      {status === SUCCESS && (
        <View>
          <View className='rushHeadItem'>
          <View className='rushHead'>
        <Text>{response.data.item.teamHead}</Text>
        <Text>{response.data.item.teamHead1}</Text>
        <Text className='rushHead2'>{response.data.item.teamHead2}</Text>
        <Text>{response.data.item.teamHead3}</Text>
        </View>
        <View className='rushTimeItem'>
        <Text className='rushTime'>{rushTime}</Text>
        <Text className='rushTimeSymbol'>{rushTimeSymbol}</Text>
        <Text className='rushTime'>{rushTime1}</Text>
        <Text className='rushTimeSymbol'>{rushTimeSymbol}</Text>
        <Text className='rushTime'>{rushTime2}</Text>
        </View>
        </View>
        <Image className='rushImg' src={response.data.item.teamImg} />
        <View>
          <Text className='rushTitle'>{response.data.item.foodName}</Text>
        </View>
        <View className='rushDesc'>
        <Image className='rushIcon' src={response.data.item.teamIcon} />
        <Text className='rushHotelName'>{response.data.item.teamHotelName}</Text>
        <Text className='distance'>{response.data.item.distance}</Text>
        </View>
        <View className='rushBottom'>
        <Text className='rushPrice'>￥{response.data.item.teamPrice}</Text>
        <Text className='rushOriginPrice'>￥{response.data.item.price}</Text>
        </View>
        </View>
      )}

    </View>
  )
}

export default Rush
