import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Card from './UI/Card';

const ServiceWorker = props => {
    return (
        <Card style={styles.service}>
            <View style={styles.serviceLine}>
                <Text style={styles.serviceItem}>{props.name}</Text>
                <Text style={styles.serviceItem}>{props.category}</Text>
            </View>
            <View style={styles.serviceLine}>
                <Text style={styles.serviceItem}>{props.address}</Text>
                <Text style={styles.serviceItem}>{props.priceRange}</Text>
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
    serviceLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    serviceItem: {
        width: '50%',
        padding: 5
    },
    actions: {
        flexDirection: 'row',
        paddingHorizontal: 20
    }
});

export default ServiceWorker;