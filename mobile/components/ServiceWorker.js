import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Card from './UI/Card';

const ServiceWorker = props => {
    return (
        <Card style={styles.service}>
            <View style={styles.serviceSummary}>
                <Text>{props.name}</Text>
                <Text>{props.category}</Text>
                <Text>{props.address}</Text>
                <Text>{props.priceRange}</Text>
            </View>
            <View style={styles.actions}>
                    {props.children}
                </View>
        </Card>
    )
};

const styles = StyleSheet.create({
    service: {
        marginTop: 20,
        padding: 10,
        alignItems: 'center'
    },
    serviceSummary: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    }
});

export default ServiceWorker;