import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon, Button, Container, Header, Content, Left} from 'native-base';
export default class DetailScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Detail',
    drawerIcon: ({tintColor}) => (
      <Icon name="ios-calendar" style={{width: 24, height: 24, color: tintColor}} />
    ),
    tabBarLabel: 'Detail',
    tabbarIcon: ({tintColor}) => (
      <Icon name="ios-calendar" style={{width: 24, height: 24, color: tintColor}} />
    ),
  };
  render () {
    return (
      <Container>
        <Header>
          <Left style={{ flex: 1 }}>
            <Icon
              name="ios-menu"
              onPress={() => this.props.navigation.openDrawer ()}
            />
          </Left>
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{padding: 10, fontSize: 20, color: '#539'}}>
            Detail screen
          </Text>
        </Content>
      </Container>
    );
  }
}
