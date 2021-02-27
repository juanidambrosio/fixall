import axios from '../../components/data/axios';

export const ADD_SERVICE = 'ADD_SERVICE';
export const GET_SERVICES = 'GET_SERVICES';

export const addService = service => {
    return {
        type: ADD_SERVICE,
        service
    }
};

export const getServices = () => {
    return async dispatch => {
        const fetchedServices = (await axios.get('/services.json')).data || [];
        const services = Object.keys(fetchedServices).map(key => fetchedServices[key]);
        dispatch({ type: GET_SERVICES, services: services });
    }
};
