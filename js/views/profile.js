import { html } from '../../node_modules/lit-html/lit-html.js';
import { getProfile } from '../api/data.js';

const profileTemplate = (item) => html`
        <section class="myProfile-section">
            <div class="profile">
                <div class="profile__player-info">
                    <div class="profile__img">
                        <img
                            src="${item.imageUrl}"
                            alt="profile pic"
                            class="profile__img--img"
                        />
                        <div class="profile__img--name">
                            <h2>${item.username}</h3>
                            <span>${item.position}</span>
                        </div>
                    </div>
                    <ul class="profile__ul">
                        <li>
                            <svg class="profile__icon">
                                <use xlink:href="images/sprite.svg#icon-smile"></use>
                            </svg>
                            <span>${item.age}</span>
                        </li>
                        <li>
                            <svg class="profile__icon">
                                <use xlink:href="images/sprite.svg#icon-soccer-ball"></use>
                            </svg>
                            <span>${item.position}</span>
                            
                        </li>
                        <li>
                            <svg class="profile__icon">
                                <use xlink:href="images/sprite.svg#icon-check-alt"></use>
                            </svg>
                            <span>${item.rang}</span>
                          
                        </li>
                        <li>
                            <svg class="profile__icon">
                                <use xlink:href="images/sprite.svg#icon-calendar"></use>
                            </svg>
                            <span> Response time: ${item.timeResponse}</span>
                           
                        </li>
                    </ul>

                    <button class="arrow">&rarr;</button>
                </div>

                <div class="profile__info">
                    <div class="profile__info-personal">
                        <ul class="profile__ul">
                            <li>
                                <svg class="profile__icon">
                                    <use xlink:href="images/sprite.svg#icon-at"></use>
                                </svg>
                                <span>${item.username}</span>
                            </li>
                            <li>
                                <svg class="profile__icon">
                                    <use xlink:href="images/sprite.svg#icon-phone"></use>
                                </svg>
                                <span>${item.phone}</span>
                                
                            </li>
                        </ul>
                    </div>
                    <div class="profile__info-game">
                        <div class="profile__info-text">
                            <ul class="profile__ul">
                                <li>
                                    <svg class="profile__icon">
                                    <use xlink:href="images/sprite.svg#icon-whistle"></use>
                                    </svg>
                                    <span>Played matches: ${item.playedGames}</span>
                                </li>
                                <li>
                                    <svg class="profile__icon">
                                        <use xlink:href="images/sprite.svg#icon-calendar"></use>
                                    </svg>
                                    <span>Orginized matches: ${item.organizedGames}</span>
                                
                                </li>
                                <li>
                                    <svg class="profile__icon">
                                        <use xlink:href="images/sprite.svg#icon-star"></use>
                                    </svg>
                                    <span>MOTM: 1</span>
                                
                                </li>
                                <li>
                                    <svg class="profile__icon">
                                        <use xlink:href="images/sprite.svg#icon-check-alt"></use>
                                    </svg>
                                    <span>Discipline level: ${item.discipline}</span>
                                
                                </li>
                            </ul>
                        </div>
                        <div class="profile__info-btns">
                            <a href="#">My Matches</a>
                            <a href="#">My Friends</a>
                            <a href="#">My Fields</a>
                        </div>
                    </div>
                </div>
            </div>

            <a href="/edit" class="btn-form">Edit my profile</a>
        </section>
`;

export async function profilePage(ctx) {
    const userId = sessionStorage.getItem('userId');
    const item = await getProfile(userId);

    ctx.render(profileTemplate(item));
}
