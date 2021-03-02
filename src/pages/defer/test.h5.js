/*
 * @Author: your name
 * @Date: 2021-02-24 18:10:01
 * @LastEditTime: 2021-02-24 19:02:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \First-Taro\src\pages\defer\test.h5.js
 */
export default function setTitle(title){
  console.log('h5',title)
  document.title=title
  document.getElementsByClassName('index')[0].style.color='green'
}