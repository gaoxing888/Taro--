/*
 * @Author: your name
 * @Date: 2021-02-24 18:10:12
 * @LastEditTime: 2021-02-24 18:45:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \First-Taro\src\pages\defer\test.weapp.js
 */
import Taro from '@tarojs/taro'

export default function setTitle(title){
  console.log('weapp',title)
  Taro.setNavigationBarTitle({
    title
  })
}