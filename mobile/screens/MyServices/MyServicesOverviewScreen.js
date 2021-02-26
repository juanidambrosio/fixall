import React from 'react';
import { FlatList, Button, StyleSheet, View, Text } from 'react-native';
import Worker from '../../components/Worker';
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
    console.log(SERVICES);
    return SERVICES.length > 0 ? (
        <FlatList
            data={SERVICES.sort((ser1, ser2) => ser1.category.name > ser2.category.name)}
            renderItem={service =>
            (
                <Worker
                    name={service.item.worker.name}
                    category={service.item.category.name}
                    address={service.item.worker.address}
                    priceRange={service.item.details.priceRange}>
                    <Button
                        color={Colors.primary}
                        title='Chat'
                        onPress={() => chatHandler(service.item.worker.id)} />
                    <Button
                        color={Colors.accent}
                        title='Cancel'
                        onPress={() => cancelHandler(service.item.worker.id)} />
                </Worker>
            )}
            extraData={SERVICES}>
        </FlatList>
    ) : (
            <View style={styles.screen}>
                <Text>Book a service in the Search tab!</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default MyServicesOverviewScreen;