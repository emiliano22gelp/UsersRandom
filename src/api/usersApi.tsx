import axios from 'axios';


const usersApi = axios.create({
    baseURL: 'https://api.github.com',
});


export default usersApi;