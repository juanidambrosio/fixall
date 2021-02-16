import React from 'react';
import { FlatList } from 'react-native';
import ServiceWorker from '../components/ServiceWorker';
import { SERVICES } from '../data/dummy-data';

const MyServicesOverviewScreen = props => {
    return (
        <FlatList
            data={SERVICES.sort((ser1, ser2) => ser1.category > ser2.category)}
            renderItem={serviceWorker =>
            (
                <ServiceWorker
                    name={serviceWorker.item.workerName}
                    category={serviceWorker.item.category}
                    address={serviceWorker.item.workerAddress}
                    priceRange={serviceWorker.item.priceRange} />
            )}>
        </FlatList>
    )
}

export default MyServicesOverviewScreen;