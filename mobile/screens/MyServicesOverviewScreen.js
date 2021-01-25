import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyServicesOverviewScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> My Services Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MyServicesOverviewScreen;