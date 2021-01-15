import React from 'react';
import {Item} from './Item/Item';
import css from './Skills.module.scss';


export const Skills = () => {

  return <section className={`page-section ${css.Skills}`}>
    <div className="wrapper">
      <div className="row d-block d-sm-flex align-items-center">
        <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
          <Item/>
        </div>

        <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0 ">
          <Item/>
        </div>

        <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0 ">
          <Item/>
        </div>

        <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0 ">
          <Item/>
        </div>
      </div>
    </div>
  </section>
};