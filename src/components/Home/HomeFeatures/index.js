import React from 'react';

import './style.css';

import SingleButton from '../../Buttons/SingleButton/index';

const HomeHeader = () => {
   return (
      <section className="home-features">
         <div className="home-image">
            <img src="https://placehold.it/400x300" className="img-responsive" alt="React-bank home" />
         </div>

         <section className="home-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi.</p>

            <div className="home-cta">
               <SingleButton text="Click here to log in" href="/login" size="lg" />
            </div>
         </section>
      </section>
   );
}

export default HomeHeader;