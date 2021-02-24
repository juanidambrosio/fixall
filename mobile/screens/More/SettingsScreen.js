import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import SwitchOption from '../../components/SwitchOption';


const SettingsScreen = props => {
    const [enableNotifications, setEnabledNotifications] = useState(true);

    const toggleSwitch = () => setEnabledNotifications(previousState => !previousState);

    return (
        <SwitchOption
            name="Notifications"
            onValueChange={toggleSwitch}
            value={enableNotifications} />
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SettingsScreen;
