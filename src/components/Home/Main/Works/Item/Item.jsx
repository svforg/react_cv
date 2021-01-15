import React from 'react';
import css from './Item.module.scss';
import logo from "./Laval.jpg";
import {CustomButton} from "../../../../shared/CustomButton/CustomButton";

export const Item = () => {

  return <div className={css.Card}>
    <div className={css.Card__front}>
      <figure className={css.Card__figure}>
        <img className={css.Card__img}
             alt="Портфолио frontend-разработчика"
             src={logo}/>
        <figcaption className={css.Card__caption}>
          <h3>Название проекта</h3>
        </figcaption>
      </figure>
    </div>

    <div className={css.Card__back}>
        <h3>Стэк:</h3>

        <ul className={css.Card__list}>
          <li className="desc-list__item">
            HTML5
          </li>

          <li className="desc-list__item">
            CSS3
          </li>

          <li className="desc-list__item">
            jQuery
          </li>
        </ul>

        <CustomButton inverse>Смотреть</CustomButton>
    </div>
  </div>
};