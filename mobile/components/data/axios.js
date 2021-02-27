import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fixall-ba-default-rtdb.firebaseio.com/'
});

export default instance;