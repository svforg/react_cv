import React from 'react';
import css from './Menu.module.scss';

export const Menu = () => {

    return <nav>
        <ul className={css.Menu}>
            <li className={css.Menu__item}>
                <a href="#hero"
                   title="Главная"
                   className={`link_underline ${css.Menu__link}`}>
                    Главная
                </a>
            </li>

            <li className={css.Menu__item}>
                <a href="#skills"
                   title="Скиллы"
                   className={`link_underline ${css.Menu__link}`}>
                    Скиллы
                </a>
            </li>

            <li className={css.Menu__item}>
                <a href="#works"
                   title="Работы"
                   className={`link_underline ${css.Menu__link}`}>
                    Работы
                </a>
            </li>

            <li className={css.Menu__item}>
                <a href="#contacts"
                   title="Контакты"
                   className={`link_underline ${css.Menu__link}`}>
                    Контакты
                </a>
            </li>
        </ul>
    </nav>
};