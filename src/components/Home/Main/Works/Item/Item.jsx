import React from 'react';
import css from './Item.module.scss';
import logo from "./Laval.jpg";

export const Item = () => {

    return <figure className={css.Column}>
        <img className={css.Column__img}
             alt="Портфолио frontend-разработчика"
             src={logo}/>
        <a className={css.Column__link}
            href="#">
        </a>
        <figcaption className={css.Column__caption}>
            <h3>Название проекта</h3>

            <p>Краткое описание</p>
        </figcaption>
    </figure>
};