import React from 'react';
import { FlatList, Button } from 'react-native';
import ServiceWorker from '../../components/ServiceWorker';
import { SERVICES } from '../../data/dummy-data';
import Colors from '../../constants/Colors';

const MyServicesOverviewScreen = props => {
    
    const chatHandler = id => {
        props.navigation.navigate('Chat', {
            workerId: id
        });
    };

    const cancelHandler = id => {
        // Delete reducer
        return;
    };
    
    return (
        <FlatList
            data={SERVICES.sort((ser1, ser2) => ser1.category > ser2.category)}
            renderItem={serviceWorker =>
            (
                <ServiceWorker
                    name={serviceWorker.item.workerName}
                    category={serviceWorker.item.category}
                    address={serviceWorker.item.workerAddress}
                    priceRange={serviceWorker.item.priceRange}>
                    <Button
                        color={Colors.primary}
                        title='Chat'
                        onPress={() => chatHandler(serviceWorker.item.id)} />
                    <Button
                        color={Colors.accent}
                        title='Cancel'
                        onPress={() => cancelHandler(serviceWorker.item.id)} />
                </ServiceWorker>
            )}>
        </FlatList>
    )
}

export default MyServicesOverviewScreen;