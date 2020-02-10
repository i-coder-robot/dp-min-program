import Taro,{useEffect}  from '@tarojs/taro'
import { View } from '@tarojs/components'
import DiscountItem from "../discount-item";
import useApiRequest from "../../useApiRequest";
import {FETCHING,SUCCESS,ERROR} from '../../actions/actionTypes'

function DiscountRight () {
  const [{status,response},makeRequestApi] = useApiRequest('http://localhost:8080/discountRight')
  useEffect(()=>{
    makeRequestApi()
  },[])
  return(
    <View className='discountRight'>
      { status === SUCCESS && (
        response&&response.data.items.map(item=>(
          <DiscountItem key={item.id} item={item} />
        ))
      )

      }
    </View>
  )
}

export default DiscountRight
