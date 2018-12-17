import React, {Component} from 'react';
import {Text} from 'react-native';
import {Icon, Button, Container, Header, Content, Left} from 'native-base';
export default class LoginScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Login',
    drawerIcon: ({tintColor}) => (
      <Icon name="ios-log-in" style={{width: 24, height: 24, color: tintColor}} />
    ),
  };
  render () {
    return (
      <Container>
        <Header>
          <Left>
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
            Login screen
          </Text>
        </Content>
      </Container>
    );
  }
}
