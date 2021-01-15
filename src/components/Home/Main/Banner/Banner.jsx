import React from 'react';
import css from './Banner.module.scss';
import {CustomButton} from '../../../../components/shared/CustomButton/CustomButton';

export const Banner = () => {

    return <section className="page-section">
        <article className={css.Banner}>
            <h2>Рассматриваю варианты удаленной работы</h2>
            <CustomButton inverse>Связаться со мной</CustomButton>
        </article>
    </section>
};