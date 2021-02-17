import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

const NotificationsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>This is the Notifications Screen!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default NotificationsScreen;
