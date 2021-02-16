import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import { SearchScreen, WorkerSelectionScreen, SummarySelectionScreen } from '../screens/Search';
import { MyServicesOverviewScreen, ChatScreen } from '../screens/MyServices';
import SettingsScreen from '../screens/SettingsScreen';

const NewServiceNavigator = createStackNavigator({
    Search: SearchScreen,
    WorkerSelection: WorkerSelectionScreen,
    SummarySelection: SummarySelectionScreen
}, {
    initialRouteName: 'Search'
});

const MyServicesNavigator = createStackNavigator({
    MyServices: MyServicesOverviewScreen,
    Chat: {
        screen: ChatScreen,
        navigationOptions: {
            title: 'Chat'
        }
    }
}, {
    initialRouteName: 'MyServices',
    defaultNavigationOptions: {
        title: 'My Services'
    }
});

const TabNavigator = createBottomTabNavigator(
    {
        Search: {
            screen: NewServiceNavigator,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return (
                        <Ionicons
                            name="search"
                            size={25}
                            color={tabInfo.tintColor}
                        />
                    );
                }
            }
        },
        MyServices: {
            screen: MyServicesNavigator,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return (
                        <Ionicons
                            name="list"
                            size={25}
                            color={tabInfo.tintColor}
                        />
                    );
                }
            }
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return (
                        <Ionicons
                            name="settings"
                            size={25}
                            color={tabInfo.tintColor}
                        />
                    );
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    });

export default createAppContainer(TabNavigator);