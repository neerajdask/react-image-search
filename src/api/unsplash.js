import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID Bdwz4cKNYfnpS59zz5eqfXBl-ny2--CquuVSs5JW52s',
    },
});
