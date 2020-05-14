import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../component/home';
import ReviewDetail from '../component/reviewDetail';
import Header from '../shared/header';

const screens = {
    Home: {
        screen:Home,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:()=> <Header navigation={navigation}/>
            }
        }
    },
    ReviewDetail: {
        screen: ReviewDetail
    }
}

const HomeStack = createStackNavigator(screens, {defaultNavigationOptions:{
    headerStyle: {
        backgroundColor: '#888'
    }
}});
export default createAppContainer(HomeStack);