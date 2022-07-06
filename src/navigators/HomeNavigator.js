import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from '../containers/Home'
import WebViewScreen from '../containers/WebViewScreen'

const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  
  WebViewScreen: {
    screen: WebViewScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0a1142'
      }
    })
  }
})

const HomeRootNavigator = createAppContainer(HomeNavigator)

export default HomeRootNavigator