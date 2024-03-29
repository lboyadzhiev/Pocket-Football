import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { logout } from './api/data.js';

export function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {},
    };

    const token = sessionStorage.getItem('authToken');

    if (token != null) {
        // options.headers['X-Authorization'] = token;
        options.headers['Authorization'] = 'Bearer ' + token;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export function setUserNav() {
    const username = sessionStorage.getItem('username');

    if (username != null) {
        document.getElementById('welcome').textContent = `Welcome, ${username}`;
        document.getElementById('user').style.display = 'block';
        document.getElementById('quest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('quest').style.display = 'block';
    }
}

export function renderMiddleware(ctx, next) {
    const main = document.getElementById('container');
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

export async function logoutApi() {
    await logout();

    setUserNav();
    page.redirect('/');
}
