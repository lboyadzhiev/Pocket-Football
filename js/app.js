import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logoutApi, setUserNav } from './utilities.js';
import { renderMiddleware } from './utilities.js';
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

import * as api from './api/api.js';
window.api = api;

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

document.getElementById('logoutBtn').addEventListener('click', logoutApi);

setUserNav();
page.start();

// nav responsive

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('menu-bar');
const navLink = document.querySelectorAll('.nav__link');

if (navToggle) {
    const array = navMenu.classList;
    navToggle.addEventListener('click', () => {
        if (array.contains('show-menu')) {
            navMenu.classList.remove('show-menu');
        } else {
            navMenu.classList.add('show-menu');
        }
    });

    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }
}
