import axios from '../../components/data/axios';
import Service from '../../models/Service';
import 'react-native-get-random-values';
import { v1 as uuidv1 } from 'uuid';

export const ADD_SERVICE = 'ADD_SERVICE';
export const GET_SERVICES = 'GET_SERVICES';

export const addService = service => {
    return async dispatch => {
        const newService = new Service(
            uuidv1(),
            {
                id: service.category.id,
                name: service.category.title
            },
            {
                name: service.worker.workerName,
                address: service.worker.workerAddress
            },
            {
                priceRange: service.worker.priceRange
            });

        await axios.post('/services.json', newService);

        dispatch(
            {
                type: ADD_SERVICE,
                service: newService
            });
    }
}

export const getServices = () => {
    return async dispatch => {
        const fetchedServices = (await axios.get('/services.json')).data || [];
        const services = Object.keys(fetchedServices).map(key => fetchedServices[key]);
        dispatch(
            {
                type: GET_SERVICES, services
            });
    }
}
