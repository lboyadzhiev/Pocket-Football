import * as api from './api.js';

const host = 'https://parseapi.back4app.com';
api.settings.host = host;

export const register = api.register;
export const login = api.login;
export const logout = api.logout;
