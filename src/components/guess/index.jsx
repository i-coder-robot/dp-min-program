import Taro,{useState,useEffect} from '@tarojs/taro'
import {View,Text,Image} from '@tarojs/components'
import {FETCHING,SUCCESS,ERROR} from '../../actions/actionTypes'
import useApiRequest from "../../useApiRequest";
import './guess.scss'


function Guess () {
  const [{status,response},makeRequestApi]= useApiRequest('http://localhost:9090/guess')
  useEffect(()=>{
    makeRequestApi()
  },[])
  return (
    <View>
      <View className='guessHead'><Text>猜你喜欢</Text></View>
      <View className='guessList'>
        { status === SUCCESS && (
          response&&response.data.items.map(item=>(
            <View className='guessItem' key={item.id}>
              <View className='guessLeft'>
                <Image className='guessImg' src={item.src} />
              </View>
              <View className='guessRight'>
                <Text className='guessTitle'>{item.title}</Text>
                <Text className='guessDesc'>{item.desc}</Text>
                <View className='guessRightBottom'>
                  <Text className='guessGoodPrice'>￥{item.goodPrice}</Text>
                  <Text className='guessPrice'>￥{item.price}</Text>
                  <Text className='guessSoldNum'>已售{item.soldNum}</Text>
                </View>
              </View>
            </View>
          ))
        )
        }
      </View>
    </View>
  )
}

export default Guess
