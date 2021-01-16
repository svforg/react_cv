import React from 'react';
import css from './Banner.module.scss';
import {CustomButton} from '../../../../components/shared/CustomButton/CustomButton';

export const Banner = () => {

  return <section className={`page-section ${css.Banner}`}>
    <div className="wrapper">
      <div className={css.Inner}>
        <h2>Рассматриваю варианты удаленной работы</h2>
        <CustomButton inverse>Связаться со мной</CustomButton>
      </div>
    </div>
  </section>
};