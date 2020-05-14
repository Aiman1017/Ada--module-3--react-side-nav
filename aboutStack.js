import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import About from '../component/about';
import Header from '../shared/header';
import React from 'react'


const screens = {
    About: {
        screen: About,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:()=> <Header navigation={navigation}/>
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {defaultNavigationOptions:{
    headerStyle: {
        backgroundColor: '#eee'
    }
}});
export default createAppContainer(AboutStack);