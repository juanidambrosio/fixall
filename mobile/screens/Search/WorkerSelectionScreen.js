import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkerSelectionScreen = props => {
    const category = props.navigation.getParam('category');
    return (
        <View style={styles.screen}>
            <Text> Worker Selection Screen for the service {category.item.title}!</Text>
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

WorkerSelectionScreen.navigationOptions = {
    headerTitle: 'Worker Selection'
  };

export default WorkerSelectionScreen;