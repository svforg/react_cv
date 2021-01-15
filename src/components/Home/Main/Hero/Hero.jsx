import React from 'react';
import css from './Hero.module.scss';
import pic from "./Slava_Forgel_photo.jpeg";

export const Hero = () => {

  return <section className={`page-section ${css.Hero}`}>
    <div className="wrapper">
      <div className="row d-block d-lg-flex  align-items-center">
        <div className="col-lg-6 col-md-12 d-flex  justify-content-center mb-5 mb-lg-0 order-lg-1">
          <picture className={css.Hero__picture}>
            <img className={css.Hero__img}
                 alt="Портфолио frontend-разработчика"
                 src={pic}/>
          </picture>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <h1 className="hero-headline">Привет!</h1>
          <h3>Меня зовут Бронислав.<br/>Я Front-end разработчик</h3>
          <p className={css.Hero__descr}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, consequuntur, dolorum
            esse facilis id iste libero magnam maxime minima modi necessitatibus quasi quidem sint ullam
            veritatis voluptatem voluptatibus! Blanditiis dolores, labore non placeat possimus ratione.
            Assumenda aut autem consectetur corporis dolore harum optio suscipit temporibus vel voluptatem!
            Ducimus, eos impedit.
          </p>
        </div>
      </div>
    </div>
  </section>
};