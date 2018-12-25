import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-project-31d5a.firebaseio.com/'
});

export default instance;