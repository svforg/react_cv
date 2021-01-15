import React from 'react';
import css from './Header.module.scss';
import {Logo} from './Logo/Logo'
import {Menu} from './Menu/Menu'
import {Contacts} from './Contacts/Contacts'
import sprite from '../../isonsSprite.svg';

export const Header = () => {
    return <header className={css.Header}>
        <div className="wrapper">
            <div className={css.Header__inner}>
              <button className={css.Header__burger}>
                <svg className={css.Header__icon}>
                  <use href={sprite + "#burger"}></use>
                </svg>
              </button>

                <Logo/>
                <Menu/>
                <Contacts/>
            </div>
        </div>
    </header>
};