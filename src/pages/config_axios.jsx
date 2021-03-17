import axios from 'axios';

const app = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default app;