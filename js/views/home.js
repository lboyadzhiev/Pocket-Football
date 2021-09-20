import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
    <main class="main-section">
        <div class="image"></div>
        <div id="homeContent">${headingTemplate()}</div>
        <div class="main-footer">
            <div class="footer-text">
                <h2 class="heading-secondary">Join Pocket Football community</h2>
                <ul>
                    <li class="text-footer">Create football events</li>
                    <li class="text-footer">Join football tournaments</li>
                    <li class="text-footer">
                        Invite your friends to create ultimate football community
                    </li>
                </ul>
            </div>
            <div class="footer-btn">
                <a href="/register" class="btn">Sign up</a>
            </div>
        </div>
    </main>
`;

const headingTemplate = () => html`
    <div class="text-box">
        <h1 class="heading-primary">
            <span class="heading-primary--main">Pocket football</span>
            <span class="heading-primary--sub">where the game is starting</span>
        </h1>
    </div>
`;

export async function homePage(ctx) {
    ctx.render(homeTemplate());
}
