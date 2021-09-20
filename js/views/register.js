import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = (onSubmit) => html`
    <section class="form-section">
        <h2 class="heading-tertiary">Sign Up</h2>

        <form @submit=${onSubmit} class="form">
            <!-- <label for="lastName" class="form__label">Last Name</label>
<input type="text" id="lastName" class="form__item" required> -->

            <label for="email" class="form__label">Email Address</label>
            <input type="email" id="email" class="form__item" name="email" required />

            <label for="password" class="form__label">Password</label>
            <input type="password" id="password" class="form__item" name="password" required />

            <label for="rePassword" class="form__label">Re-Password</label>
            <input type="password" id="rePassword" class="form__item" name="repass" required />

            <input type="submit" class="btn-form" value="Register" />
        </form>
    </section>
`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('repass');

        await register(email, password);

        ctx.setUserNav();
        ctx.page.redirect('/home');
    }
}
