import React from 'react';
import {FlatList} from 'react-native';
import {Text, ListItem, Left, Body, Icon, Container,Header,Content} from 'native-base';
import Constants from '../utils/Constants';
export default class CategoryScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Category',
    drawerIcon: ({tintColor}) => (
      <Icon
        name="ios-list-box"
        style={{width: 24, height: 24, color: tintColor}}
      />
    ),
    tabBarLabel: 'Category',
    tabBarIcon: ({tintColor}) => (
      <Icon
        name="ios-list-box"
        style={{width: 24, height: 24, color: tintColor}}
      />
    ),
  };

  constructor () {
    super ();
    this.state = {
      data: [],
      stickyHeaderIndices: [],
    };
  }
  componentDidMount () {
    this.getGendersFromApi ();
  }
  getGendersFromApi () {
    return fetch (
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${Constants.API_KEY}`
    )
      .then (response => response.json ())
      .then (responseJson => {
        this.setState ({
          data: responseJson.genres,
          isLoading: false,
        });
        // console.warn(this.state.data)
      })
      .catch (error => {
        // console.error (error);
      });
  }

  renderItem = ({item}) => {
    return (
      <ListItem style={{ marginLeft: 0 }}>
        <Body>
          <Text>{item.name}</Text>
        </Body>
      </ListItem>
    );
  };

  render () {
    return (
      <Container>
      <Header>
        <Left style={{flex:1}}>
            <Icon
              name="ios-menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
        </Left>
      </Header>
      <Content>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item.name}
            stickyHeaderIndices={this.state.stickyHeaderIndices}
          />
      </Content>
      </Container>
         
    );
  }
}
