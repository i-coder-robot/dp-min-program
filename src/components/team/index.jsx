import Taro, {useState, useEffect} from '@tarojs/taro'
import {View, Text, Image} from "@tarojs/components";
import './team.scss'
import useApiRequest from "../../useApiRequest";
import {SUCCESS} from "../../actions/actionTypes";

function Team () {
  const [{status, response}, makeRequestApi] = useApiRequest('http://localhost:9090/team')
  useEffect(() => {
    makeRequestApi()
  }, [])

  let team = {}

  return (
    <View className='teamItem'>
      {

        status === SUCCESS && (
          <View>
            <View className='teamHeadItem'>
              <Text>{response.data.item.teamHead}</Text>
              <Text>{response.data.item.teamHead1}</Text>
              <Text className='head2'>{response.data.item.teamHead2}</Text>
              <Text>{response.data.item.teamHead3}</Text>
            </View>
            <Image className='teamImg' src={response.data.item.teamImg} />
            <View>
            <Text className='foodName'>{response.data.item.foodName}</Text>
            </View>
              <View>
              <Image className='teamIcon' src={response.data.item.teamIcon} />
              <Text className='teamHotelName'>{response.data.item.teamHotelName}</Text>
            </View>
            <View className='teamBottom'>
              <Text className='teamPersons'>{response.data.item.teamPersons}</Text>
              <Text className='teamPrice'>￥{response.data.item.teamPrice}</Text>
              <Text className='price'>￥{response.data.item.price}</Text>
            </View>
          </View>
        )
      }

    </View>
  )
}

export default Team
