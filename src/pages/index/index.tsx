/*
 * @Author: your name
 * @Date: 2021-02-22 16:30:06
 * @LastEditTime: 2021-02-24 18:41:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \First-Taro\src\pages\index\index.tsx
 */
import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.less";
import setTitle from "../defer/test";
export default class Index extends Component {
  onLoad(options) {
    console.log("初次加载页面");
    console.log(process.env.TARO_ENV);
    if (process.env.TARO_ENV === "weapp") {
    }

    setTitle("首页最新");
  }

  componentDidShow() {
    console.log("页面显示或切入前台该页面时");
  }

  onReady() {
    console.log("页面加载完成可以访问dom");
  }

  componentDidHide() {
    console.log("页面隐藏或切入后台时");
  }

  onTabItemTap(object) {
    console.log("onTabItemTap", object);
  }
  render() {
    return (
      <View className="index" style={{ height: Taro.pxTransform(40, 750) }}>
        <Text className="text">Hello world!</Text>
      </View>
    );
  }
}
