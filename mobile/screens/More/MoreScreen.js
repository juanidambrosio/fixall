import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { SETTINGS } from '../../data/dummy-data';
import Colors from '../../constants/Colors';

const MoreScreen = props => {

    const onPress = screen => {
        props.navigation.navigate(screen)
    };

    const settings = SETTINGS.map(setting => (
        <Button
            key={setting.id}
            title={setting.name}
            color={Colors.primary}
            onPress={() => onPress(setting.screen)} />
    ))
    return settings;
}

const styles = StyleSheet.create({
    setting: {
        height: 30,
        fontSize: 50,
        alignContent: 'flex-start',
        color: Colors.primary
    }
});

export default MoreScreen;