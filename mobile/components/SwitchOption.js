import React from 'react';
import { StyleSheet, Text, Switch, View } from 'react-native';
import Colors from '../constants/Colors';

const SwitchOption = props => {
    return (
        <View style={styles.setting}>
            <Text style={{ fontSize: 20 }}>{props.name}</Text>
            <Switch
                onValueChange={props.onValueChange}
                value={props.value}
                trackColor={{ true: Colors.primary }}
                ios_backgroundColor='white'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    setting: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between'
    }
});

export default SwitchOption;