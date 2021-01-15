import React from 'react';
import css from './Item.module.scss';
import logo from '../../../../../logo.svg';

export const Item = () => {

    return <figure className={css.Column}>
        <img className={css.Column__img}
             alt="Портфолио frontend-разработчика"
             src={logo}/>
        <figcaption className={css.Column__caption}>
            <h3>React</h3>

            <p>Подробное описание навыка</p>
        </figcaption>
    </figure>
};