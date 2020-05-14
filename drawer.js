import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {HeaderTitle} from 'react-navigation-stack';

import HomeStack from './homeStack';
import AboutStack from './aboutStack';


const RootNavigationDrawer = createDrawerNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions:({navigation}) => {
            return ({
                headerTitle: () => <Header navigation = {navigation} />
            })
        }
    },
    About: {
        screen: AboutStack
    }
});
export default createAppContainer(RootNavigationDrawer);