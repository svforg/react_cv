import React from 'react';
import {Item} from './Item/Item';
import css from "./Works.module.scss";

export const Works = () => {

  return <section className={`page-section ${css.Works}`}>
    <div className={`${css.Curve} ${css.CurveTop}`}></div>

    <div className="wrapper">
      <div className="row d-block d-lg-flex  align-items-center">
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <Item/>
        </div>

        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <Item/>
        </div>
      </div>
    </div>
  </section>
};