import React from 'react';
import css from './Contacts.module.scss';

export const Contacts = () => {

    return <div className={css.Contacts}>

        <a className={`${css.Contacts__link} ${css.Contacts__link_phone}`}
           title="Телефон Slava Forgel"
           href="tel:+79223488919">

            +7 (922) 348-89-19
        </a>

        <a className={`${css.Contacts__link} ${css.Contacts__link_mail}`}
           title="Электронная почта Slava Forgel"
           href="mailto:svforgel89@gmail.com">
            svforgel89@gmail.com
        </a>
    </div>
};