import React from 'react';
import css from './Footer.module.scss';
import sprite from '../../isonsSprite.svg';

export const Footer = () => {
  return <footer className={css.Footer}>
    <div className="wrapper">

      <ul className={css.Footer__children}>
        <li className={css.Footer__item}>
          <a className={css.Footer__link}
             href="#"
             rel="nofollow" target="_blank">
            <svg>
              <use href={sprite + "#vkontakte"}></use>
            </svg>
          </a>
        </li>

        <li className={css.Footer__item}>
          <a className={css.Footer__link}
             href="#"
             rel="nofollow" target="_blank">
            <svg>
              <use href={sprite + "#facebook"}></use>
            </svg>
          </a>
        </li>
        <li className={css.Footer__item}>
          <a className={css.Footer__link}
             href="#"
             rel="nofollow" target="_blank">
            <svg>
              <use href={sprite + "#twitter"}></use>
            </svg>
          </a>
        </li>

        <li className={css.Footer__item}>
          <a className={css.Footer__link}
             href="#"
             rel="nofollow" target="_blank">
            <svg>
              <use href={sprite + "#yooutube"}></use>
            </svg>
          </a>
        </li>

        <li className={css.Footer__item}>
          <a className={css.Footer__link}
             href="#"
             rel="nofollow" target="_blank">
            <svg>
              <use href={sprite + "#instagram"}></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
};