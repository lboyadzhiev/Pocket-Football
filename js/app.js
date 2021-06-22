import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { homePage } from './views/home.js';
import { publickGamesPage } from './views/publickGames.js';
import { tournamentsPage } from './views/tournaments.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { profilePage } from './views/profile.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { myGamesPage } from './views/myGames.js';
import { pocketPage } from './views/pocket.js';
import { logout } from './api/api.js';

import * as api from './api/api.js';
window.api = api;

const main = document.getElementById('container');

page('/', renderMiddleware, homePage);
page('/home', renderMiddleware, homePage);
page('/publick', renderMiddleware, publickGamesPage);
page('/tournaments', renderMiddleware, tournamentsPage);
page('/register', renderMiddleware, registerPage);
page('/login', renderMiddleware, loginPage);
page('/profile', renderMiddleware, profilePage);
page('/create', renderMiddleware, createPage);
page('/details/:id', renderMiddleware, detailsPage);
page('/edit/:id', renderMiddleware, editPage);
page('/my-games', renderMiddleware, myGamesPage);
page('/pocket', renderMiddleware, pocketPage);

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();

    setUserNav();
    page.redirect('/');
});

setUserNav();
page.start();

function renderMiddleware(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
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

let button = document.querySelector('.menu-bar');
let div = document.querySelector('.show');
// div.style.display = 'none';

button.addEventListener('click', toggle);

function toggle() {
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}

document.querySelector('.nav-el').addEventListener('click', (event) => {
    console.log(event);
});
