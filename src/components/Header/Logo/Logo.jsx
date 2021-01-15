import React from 'react';
import css from './Logo.module.scss';
import logo from '../../../logo.svg';

export const Logo = () => {
    return <a className={css.Logo}
              href="/"
              title="Портфолио frontend-разработчика">

        <img className={css.Logo__image}
             alt="Портфолио frontend-разработчика"
             src={logo}/>

        <div className={css.Logo__text}>
            <strong className={css.Logo__text_strong}>
                Slava Forgel
            </strong>

            <span className={css.Logo__text_desktop}>
               Frontend-разработчик
            </span>
        </div>
    </a>
};