import * as api from './api.js';

const host = 'http://localhost:3030';

export async function login(email, password) {
    const result = await api.post(host + '/users/login', { email, password });

    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);

    return result;
}

export async function logout() {
    const result = await api.get(host + '/users/logout');

    sessionStorage.removeItem('email');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');

    return result;
}

export const register = api.register;
