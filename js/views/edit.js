import { html } from '../../node_modules/lit-html/lit-html.js';

const editTemplate = () => html`
    <section class="form-section">
        <h2 class="heading-tertiary">Register to start your pocket football journey</h2>

        <form class="form">
            <label for="position" class="form__label">Email</label>
            <input type="email" id="email" class="form__item" name="position" required />

            <label for="age" class="form__label">Age</label>
            <input type="number" id="age" class="form__item" name="age" required />

            <label for="position" class="form__label">Position</label>
            <input type="text" id="position" class="form__item" name="position" required />

            <label for="phone" class="form__label">Phone</label>
            <input type="phone" id="phone" class="form__item" name="phone" required />

            <input type="submit" class="btn-form" value="Submit" />
        </form>
    </section>
`;

export async function editPage(ctx) {
    ctx.render(editTemplate());

    console.log('edit page');
}
