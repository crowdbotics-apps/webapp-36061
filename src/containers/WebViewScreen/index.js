import React, { Component } from 'react'
import { WebView, ActivityIndicator } from 'react-native'

class WebViewScreen extends Component {
  LoadingIndicatorView() {
    return (
      <ActivityIndicator
        color='#0a1142'
        size='large'
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      />
    )
  }

  render() {
    const { params } = this.props.navigation.state
    return (
      <WebView
        source={{ uri: params.link }}
        renderLoading={this.LoadingIndicatorView}
        startInLoadingState={true}
      />
    )
  }
}

export default WebViewScreen