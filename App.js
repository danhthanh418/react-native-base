import React, { Component } from 'react';
import CustomFlatList from './src/components/screens/CustomFlatList';
// import for Menu drawer

import {createAppContainer,createDrawerNavigator,DrawerItems,SafeAreaView} from 'react-navigation'
import HomeScreen from './src/components/screens/HomeScreen';
import SettingScreen from './src/components/screens/SettingScreen';
import { Container, Header, Body, Content, Icon } from 'native-base';
import {StyleSheet,Image,Dimensions} from 'react-native'

const {width} = Dimensions.get('window')
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingScreen,
    
  },
},{
  drawerPosition:'left',
  initialRouteName:'Home',
  // contentComponent:CustomContentComponent,
  drawerWidth:width*0.8,
  contentOptions:{
    activeTintColor:'orange'
  }
});

const MyApp = createAppContainer (MyDrawerNavigator);

const CustomContentComponent = (props)=>(
  <SafeAreaView style={{flex:1}}>
    <Header style={{height:200}}>
      <Image style={styles.drawerImage} source={require('./assets/logo.png')}></Image>
    </Header>
    <Content>
      <DrawerItems {...props}></DrawerItems>
    </Content>
  </SafeAreaView>
)
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }


  render() {

    return (
      <MyApp></MyApp>
    )
  }
}

const style = StyleSheet.create({
  drawerImage:{
    height:150,
    width:150,
    borderRadius: 75 ,
  }
})
