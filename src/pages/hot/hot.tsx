/*
 * @Author: your name
 * @Date: 2021-02-23 15:26:21
 * @LastEditTime: 2021-02-23 15:32:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \First-Taro\src\pages\hot\hot.tsx
 */
import React, { Component } from "react";
import { View, Text,Swiper,SwiperItem,Image } from "@tarojs/components";
import VirtualList from '@tarojs/components/virtual-list'
import './hot.less'

function Data(start=0){
  console.log(Array(100))
   return Array(100).fill(0).map((_,i)=>i+start)
}

const Row=React.memo(({id,index,stlye,data})=>{
  return (
    <View className={`box ${index/2?'double':'single'}`}  id={id} style={stlye}>
    <Image className='image-name' src={require('./image/item.jpg')}></Image>
    <Text className='word'>展示文案展示文案展示文案展示文案展示文案展示文案</Text>

  </View>
  )
})
export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  state={
    data:Data(0)
  }
  render() {
    return (
      <View>
   <Swiper
      
      className='test-h'
      indicatorColor='#999'
      indicatorActiveColor='#333'
      vertical={false}
      circular
      indicatorDots
      autoplay>
      <SwiperItem>
      
        <Image
        mode='aspectFill'
          style='width: 100%;height: 100%;background: #000;'
          src={require('./image/cat.jpg')}
        />
      
      </SwiperItem>
      <SwiperItem>
      <Image
        mode='aspectFill'
          style='width: 100%;height: 100%;background: #000;'
          src={require('./image/cat.jpg')}
        />
      </SwiperItem>
      <SwiperItem>
      <Image
        mode='aspectFill'
          style='width: 100%;height: 100%;background: #000;'
          src={require('./image/cat.jpg')}
        />
      </SwiperItem>
    </Swiper>
    <VirtualList
    height={400}
    itemData={this.state.data}
    itemCount={this.state.data.length}
    itemSize={120}
    width='100%'
    >
    {Row}
    </VirtualList>
    
      </View>
   
    );
  }
}
