import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function postRegister(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function postLogin (body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    return promise;
}

function postBalance (body, header) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body);
    return promise;
}

export { postLogin, postRegister, postBalance};