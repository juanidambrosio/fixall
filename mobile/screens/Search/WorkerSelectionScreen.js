import React from 'react';
import { FlatList, Button } from 'react-native';
import Worker from '../../components/Worker';
import { WORKERS } from '../../data/dummy-data';
import Colors from '../../constants/Colors';
import Service from '../../models/Service';
import 'react-native-get-random-values';
import { v1 as uuidv1 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addService } from '../../store/actions/services';
import axios from '../../components/data/axios';

const WorkerSelectionScreen = props => {
    const dispatch = useDispatch();
    const category = props.navigation.getParam('category');

    const contactHandler = service => {
        const newService = new Service(
            uuidv1(),
            {
                id: category.item.id,
                name: category.item.title
            },
            {
                name: service.workerName,
                address: service.workerAddress
            },
            {
                priceRange: service.priceRange
            });

        axios.post('/services.json', newService).then(response => {
            dispatch(addService(newService));
        });

        props.navigation.navigate('Chat', {
            workerId: service.id
        });
    };

    return (
        <FlatList
            data={WORKERS
                .filter(worker => worker.categories
                    .some(cat => cat.id == category.item.id))}
            renderItem={worker =>
            (
                <Worker
                    name={worker.item.workerName}
                    category={category.item.title}
                    address={worker.item.workerAddress}
                    priceRange={worker.item.priceRange}>
                    <Button
                        color={Colors.primary}
                        title='Contact'
                        onPress={() => contactHandler(worker.item)} />
                </Worker>
            )}>
        </FlatList>
    )
}

WorkerSelectionScreen.navigationOptions = {
    headerTitle: 'Worker Selection'
};

export default WorkerSelectionScreen;