import axios from 'axios';

const BASE_URL = 'https://localhost:5000';

function postRegister(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function postLogin (body) {
    const promise = axios.post(`${BASE_URL}/login`, body);
    return promise;
}

export { postLogin, postRegister};