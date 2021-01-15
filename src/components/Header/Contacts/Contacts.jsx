import React from 'react';
import css from './Contacts.module.scss';
import sprite from '../../../isonsSprite.svg';


export const Contacts = () => {

  return <div className={css.Contacts}>

    <a className={`${css.Contacts__link} ${css.Contacts__link_phone}`}
       title="Телефон Slava Forgel"
       href="tel:+79223488919">
      <svg className={css.Contacts__icon}>
        <use href={sprite + "#phone"}></use>
      </svg>

      <span className={css.Contacts__text}>+7 (922) 348-89-19</span>
    </a>

    <a className={`${css.Contacts__link} ${css.Contacts__link_mail}`}
       title="Электронная почта Slava Forgel"
       href="mailto:svforgel89@gmail.com">

      <svg className={css.Contacts__icon}>
        <use href={sprite + "#email"}></use>
      </svg>

      <span className={css.Contacts__text}>svforgel89@gmail.com</span>
    </a>
  </div>
};