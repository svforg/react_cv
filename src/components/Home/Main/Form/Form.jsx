import React from 'react';
import {CustomInput} from '../../../../components/shared/CustomInput/CustomInput'
import {CustomTextArea} from '../../../../components/shared/CustomTextArea/CustomTextArea'
import {CustomButton} from '../../../../components/shared/CustomButton/CustomButton'
import css from './Form.module.scss';

export const Form = () => {
  return <section className={`page-section ${css.Form}`}>
    <div className="wrapper">
      <h2>Рассматриваю варианты удаленной работы</h2>

      <form className={css.Form__inner}>
        <div className="row mb-4">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <CustomInput labelTitle="Почта"/>

            <CustomInput labelTitle="Телефон"/>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <CustomTextArea label="Комментарий"/>
          </div>
        </div>

        <CustomButton>Send</CustomButton>
      </form>
    </div>
  </section>
};