/*
 * @Author: your name
 * @Date: 2021-02-22 16:30:06
 * @LastEditTime: 2021-02-24 14:51:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \First-Taro\src\app.config.ts
 */
export default {
  pages: [
    'pages/index/index',
    'pages/hot/hot',
    'pages/nodes/nodes'
  ],
  tabBar: {
    list: [{
      pagePath: 'pages/index/index',
      text: '最新',
      iconPath:'resource/info_icon.png',
      selectedIconPath:'resource/info_icon.png'
    }, {
      pagePath: 'pages/hot/hot',
      text: '热门',
      iconPath:'resource/info_icon.png',
      selectedIconPath:'resource/info_icon.png'
    }, {
      pagePath: 'pages/nodes/nodes',
      text: '节点',
      iconPath:'resource/info_icon.png',
      selectedIconPath:'resource/info_icon.png'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'black',
    'position':'bottom'
  },
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'taro',
    navigationBarTextStyle: 'black'
  },
  // debug:true
}
