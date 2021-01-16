import React from 'react';
import {Hero} from './Hero/Hero';
import {Skills} from './Skills/Skills';
import {Works} from './Works/Works';
import {Banner} from './Banner/Banner';
import {Form} from './Form/Form';
import {CanvasBG} from "../../shared/CanvasBG/CanvasBG";
import css from "./Main.module.scss";

export const Main = () => {
  return <main className="main">
    <Hero/>
    <Skills/>
    <Works/>
    <Banner/>
    <Form/>
    <CanvasBG className={css.CanvasBg}/>
  </main>
};