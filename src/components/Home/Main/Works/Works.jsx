import React from 'react';
import {Item} from './Item/Item';

export const Works = () => {

    return <section className="page-section">
        <div className="row d-block d-lg-flex  align-items-center">
            <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                <Item/>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                <Item/>
            </div>
        </div>
    </section>
};