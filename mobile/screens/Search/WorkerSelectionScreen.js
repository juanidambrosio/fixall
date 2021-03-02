import React from 'react';
import { FlatList, Button } from 'react-native';
import Worker from '../../components/Worker';
import { WORKERS } from '../../data/dummy-data';
import Colors from '../../constants/Colors';
import { useDispatch } from 'react-redux';
import { addService } from '../../store/actions/services';

const WorkerSelectionScreen = props => {
    const dispatch = useDispatch();
    const category = props.navigation.getParam('category');

    const contactHandler = item => {
        dispatch(addService(item));

        props.navigation.navigate('Chat', {
            workerId: item.worker.id
        });
    }

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
                        onPress={() => contactHandler({ worker: worker.item, category: category.item })} />
                </Worker>
            )}>
        </FlatList>
    )
}

WorkerSelectionScreen.navigationOptions = {
    headerTitle: 'Worker Selection'
};

export default WorkerSelectionScreen;