import React from 'react';
import {Hero} from './Hero/Hero';
import {Skills} from './Skills/Skills';
import {Works} from './Works/Works';
import {Banner} from './Banner/Banner';
import {Form} from './Form/Form';

export const Main = () => {
  return <main className="main">
    <article>
      <Hero/>
      <Skills/>
      <Works/>
      <Banner/>
      <Form/>
    </article>
  </main>
};