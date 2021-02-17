import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

const ProfessionalRegistrationScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>This is the Professional Registration Screen!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProfessionalRegistrationScreen;
