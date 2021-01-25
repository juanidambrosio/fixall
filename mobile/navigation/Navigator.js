import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import SearchScreen from '../screens/SearchScreen';
import MyServicesOverviewScreen from '../screens/MyServicesOverviewScreen';
import SettingsScreen from '../screens/SettingsScreen';

const TabNavigator = createBottomTabNavigator(
    {
        Search: {
            screen: SearchScreen,
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
            screen: MyServicesOverviewScreen,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return (
                        <Ionicons
                            name="list"
                            size={25}
                            color={tabInfo.tintColor}
                        />
                    );
                },
                title: 'My Services'
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