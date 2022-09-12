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
    const promise = axios.post(`${BASE_URL}/balance`, body, header);
    return promise;
}

function getBalance ( header) {
    const promise = axios.get(`${BASE_URL}/balance`, header);
    return promise;
}

function postEditedBalance ( body, header) {
    const promise = axios.post(`${BASE_URL}/edit/`, body, header);
    return promise;
}

function deleteBalance ( header, params) {
    const promise = axios.delete(`${BASE_URL}/balance/?balanceId=`+params, header);
    return promise;
}

export { postLogin, postRegister, postBalance, getBalance, postEditedBalance, deleteBalance};