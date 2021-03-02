import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import { SearchScreen, WorkerSelectionScreen, SummarySelectionScreen } from '../screens/Search';
import { MyServicesOverviewScreen, ChatScreen } from '../screens/MyServices';
import { MoreScreen, NotificationsScreen, ProfessionalRegistrationScreen, SettingsScreen } from '../screens/More';

const NewServiceNavigator = createStackNavigator({
    Search: SearchScreen,
    WorkerSelection: WorkerSelectionScreen,
    SummarySelection: SummarySelectionScreen,
    Chat: {
        screen: ChatScreen,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Chat',
                headerLeft: () => <HeaderBackButton label='My Services' onPress={() => { navigation.popToTop(); navigation.navigate('MyServices') }} />
            }
        }
    }
}, {
    initialRouteName: 'Search'
});

const MyServicesNavigator = createStackNavigator({
    MyServices: {
        screen: MyServicesOverviewScreen
    },
    Chat: {
        screen: ChatScreen
    }
}, {
    initialRouteName: 'MyServices',
    defaultNavigationOptions: {
        title: 'My Services'
    }
});

const MoreNavigator = createStackNavigator({
    More: MoreScreen,
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            title: 'Settings'
        }
    },
    Notifications: {
        screen: NotificationsScreen,
        navigationOptions: {
            title: 'Notifications'
        }
    },
    ProfessionalRegistration: {
        screen: ProfessionalRegistrationScreen,
        navigationOptions: {
            title: 'Offer your Services'
        }
    }
});

const TabNavigator = createBottomTabNavigator(
    {
        Search: {
            screen: NewServiceNavigator,
            navigationOptions: ({ navigation }) => {
                const routeName = navigation.state.routes[navigation.state.index].routeName;
                return {
                    tabBarIcon: tabInfo => {
                        return (
                            <Ionicons
                                name="search"
                                size={25}
                                color={tabInfo.tintColor}
                            />
                        );
                    },
                    tabBarVisible: routeName !== 'Chat'
                }
            }
        },
        MyServices: {
            screen: MyServicesNavigator,
            navigationOptions: ({ navigation }) => {
                const routeName = navigation.state.routes[navigation.state.index].routeName;
                return {
                    tabBarIcon: tabInfo => {
                        return (
                            <Ionicons
                                name="book"
                                size={25}
                                color={tabInfo.tintColor}
                            />
                        );
                    },
                    tabBarLabel: 'My Services',
                    tabBarVisible: routeName !== 'Chat'
                }
            }
        },
        More: {
            screen: MoreNavigator,
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
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    });

export default createAppContainer(TabNavigator);