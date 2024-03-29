import * as api from './api.js';

const host = 'http://localhost:3030';
const hostJava = 'http://localhost:8080';

export async function login(username, password) {
    const result = await api.post(hostJava + '/authenticate', { username, password });
    // const result = await api.post(host + '/users/login', { email, password });

    sessionStorage.setItem('username', username);
    sessionStorage.setItem('authToken', result.jwt);
    // sessionStorage.setItem('userId', result._id);

    return result;
}

export async function logout() {
    const result = await api.get(host + '/users/logout');

    sessionStorage.removeItem('email');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');

    return result;
}

export async function register(email, password) {
    const result = await api.post(host + '/users/register', {
        email,
        password,
    });

    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);

    return result;
}

export async function getProfile() {
    return await api.get(hostJava + '/user-details');
}
