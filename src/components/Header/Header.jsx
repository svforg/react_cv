import React from 'react';
import css from './Header.module.scss';
import {Logo} from './Logo/Logo'
import {Menu} from './Menu/Menu'
import {Contacts} from './Contacts/Contacts'

export const Header = () => {
    return <header className={css.Header}>
        <div className="wrapper">
            <div className={css.Header__inner}>
                <Logo/>
                <Menu/>
                <Contacts/>
            </div>
        </div>
    </header>
};