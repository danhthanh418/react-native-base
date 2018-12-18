import React, {Component} from 'react';
import CustomFlatList from './src/components/screens/CustomFlatList';
// import for Menu drawer

import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView,
  createBottomTabNavigator
} from 'react-navigation';
import HomeScreen from './src/components/screens/HomeScreen';
import SettingScreen from './src/components/screens/SettingScreen';
import {Header, Content} from 'native-base';
import {StyleSheet, Image, Dimensions} from 'react-native';
import LoginScreen from './src/components/screens/LoginScreen';
import DetailScreen from './src/components/screens/DetailScreen';
import CategoryScreen from './src/components/screens/CategoryScreen';

const {width} = Dimensions.get ('window');

const MyDrawerNavigator = createDrawerNavigator (
  {
    Home: {
      screen: HomeScreen,
    },
    FlatList: {
      screen: CustomFlatList,
    },
    Catteories: {
      screen: CategoryScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Settings: {
      screen: SettingScreen,
    },
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Home',
    // contentComponent:CustomContentComponent,
    drawerWidth: width * 0.8,
    contentOptions: {
      activeTintColor: 'orange',
    },
  }
);

const MyBottomTabNavigation = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  FlatList: {
    screen: CustomFlatList,
  },
  Catteories: {
    screen: CategoryScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Settings: {
    screen: SettingScreen,
  },
},
  {
    drawerPosition: 'left',
    initialRouteName: 'Home',
    contentComponent:CustomContentComponent,
    drawerWidth: width * 0.8,
    contentOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'grey',
    },
  }
)
const DrawerContainer = createAppContainer (MyDrawerNavigator);
const BottomTabNavigationContainer = createAppContainer (MyBottomTabNavigation);
const CustomContentComponent = props => (
  <SafeAreaView style={{flex: 1}}>
    <Header style={{height: 200}}>
      <Image
        style={styles.drawerImage}
        source={require ('./assets/logo.png')}
      />
    </Header>
    <Content style={{flex:1}}>
      <DrawerItems {...props} />
    </Content>
  </SafeAreaView>
);


export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      toggle:false
    };
  }
  render(){
    cosnt = {toggle} = this.state
    return <DrawerContainer></DrawerContainer>
  }
}

const style = StyleSheet.create ({
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
});
