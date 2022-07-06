import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import HomeRootNavigator from './src/navigators/HomeNavigator'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle='light-content' />
        <HomeRootNavigator />
      </Provider>
    )
  }
}

export default App