import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';

const loginTemplate = (onSubmit) => html`
    <main class="main-section">
        <div class="image"></div>
        <section class="form-section">
            <h2 class="heading-primary--sub">Login</h2>
            <form @submit=${onSubmit} class="login-form">
                <div class="login-form__items">
                    <input
                        type="text"
                        class="login-form__item"
                        placeholder="username"
                        name="username"
                    />
                    <input
                        type="password"
                        class="login-form__item"
                        placeholder="password"
                        name="password"
                    />
                </div>
                <input type="submit" class="btn-form login-form__btn-login" value="Login" />
            </form>

            <div class="login-with">
                <a href="/"><i class="fab fa-facebook"></i></a>
            </div>
        </section>
    </main>
`;

export async function loginPage(ctx) {
    console.log('login page');

    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        console.log('it works');

        const formData = new FormData(event.target);
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();

        await login(username, password);

        ctx.setUserNav();
        ctx.page.redirect('/home');
    }
}
