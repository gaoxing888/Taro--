import { Component } from 'react'
import './app.less'

class App extends Component {

  componentDidMount () {}
  onLaunch (options) {
    console.log('onLaunch',options)
  }
  componentDidShow (options) {
    console.log('componentDidShow',options)
  }

  componentDidHide () {
    console.log('componentDidHide')
  }

  componentDidCatchError () {}

  onPageNotFound(Object){
    console.log('onPageNotFound',Object)
  }

  
  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
