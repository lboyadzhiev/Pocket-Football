import page from '../node_modules/page/page.mjs';

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
api.settings.host = 'https://parseapi.back4app.com';
window.api = api;

page('/', homePage);
page('/home', homePage);
page('/publick', publickGamesPage);
page('/tournaments', tournamentsPage);
page('/register', registerPage);
page('./login', loginPage);
page('/profile', profilePage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/my-games', myGamesPage);
page('/pocket', pocketPage);

page.start();
