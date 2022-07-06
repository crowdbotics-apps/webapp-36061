
  import React, { Component } from 'react'
import { Container, Content, Text, Button } from 'native-base'
import styles from './styles'

class Home extends Component {
    state = {
        links: [
          {
            title: 'ombi',
            link: 'https://ombi.zakariao.nl'
          },
          {
            title: 'organizr',
            link: 'https://organizer.zakariao.nl'
          },
          {
            title: 'radarr',
            link: 'https://radar.zakariao.nl'
          },
          {
            title: 'sonarr',
            link:
              'https://sonar.zakariao.nl'
          }
        ]
      }

  handleButtonPress = () => {
    const { title, link } = this.state
    this.props.navigation.navigate('WebViewScreen', { title, link })
  }
  render() {
    const { links } = this.state
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          {links.map((item, index) => (
            <Button
              onPress={() => this.handleButtonPress(item)}
              style={styles.button}
              key={index}>
              <Text style={styles.text}>{item.title}</Text>
            </Button>
          ))}
        </Content>
      </Container>
    )
  }
}

export default Home