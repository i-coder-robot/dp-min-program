import Taro,{useState,useEffect} from '@tarojs/taro'
import { View } from '@tarojs/components'
import DiscountItem from "../discount-item";
import {FETCHING,SUCCESS,ERROR} from '../../actions/actionTypes'
import useApiRequest from "../../useApiRequest";

function DiscountLeft () {

  const [{status,response},makeRequestApi] = useApiRequest('http://localhost:8080/discountLeft')

  useEffect(()=>{
    makeRequestApi()
  },[])
  return(
    <View className='discountLeft'>
      {
        status===SUCCESS && (
          response&&response.data.items.map(item=>(
            <DiscountItem key={item.id} item={item} />
          ))
        )

      }
    </View>
  )
}

export default DiscountLeft
