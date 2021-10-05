import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers :{
        Authorization: 'Client-ID iZc2gRhfUGmdM9lWaBlfkr1JWlKiBo6SLZcTgUQ0vwY' 
    }
});