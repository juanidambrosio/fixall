import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const ChatScreen = props => {
const workerId = props.navigation.getParam('workerId');
    return (
        <View style={styles.screen}>
            <Text>This is the chat screen with worker {workerId}!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ChatScreen;