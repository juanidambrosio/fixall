import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummarySelectionScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> Summary Selection Screen!</Text>
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

export default SummarySelectionScreen;