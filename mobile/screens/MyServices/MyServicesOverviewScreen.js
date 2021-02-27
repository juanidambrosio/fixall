import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Button, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Worker from '../../components/Worker';
import Colors from '../../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { getServices } from '../../store/actions/services';

const MyServicesOverviewScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();

    const services = useSelector(state => state.services.services);

    const dispatch = useDispatch();

    const fetchServices = useCallback(async () => {
        setError(null);
        setIsRefreshing(true);
        try {
            await dispatch(getServices());
        } catch (err) {
            setError(err.message);
        }
        setIsRefreshing(false);
    }, [dispatch, setIsRefreshing, setError]);

    useEffect(() => {
        setIsLoading(true);
        fetchServices().then(() => {
            setIsLoading(false);
        });
    }, [fetchServices, setIsLoading]);

    const chatHandler = id => {
        props.navigation.navigate('Chat', {
            workerId: id
        });
    };

    const cancelHandler = id => {
        // Delete reducer
        return;
    };

    if (error) {
        console.log(error);
        return (
            <View style={styles.screen}>
                <Text>An error occurred!</Text>
                <Button
                    title="Try again"
                    onPress={fetchServices}
                    color={Colors.primary}
                />
            </View>
        );
    }

    if (isLoading) {
        return (
            <View style={styles.screen}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        );
    }

    return services.length > 0 ? (
        <FlatList
            data={services.sort((ser1, ser2) => ser1.category.name > ser2.category.name)}
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
            onRefresh={fetchServices}
            refreshing={isRefreshing}>
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
});

export default MyServicesOverviewScreen;