import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const HomeHeader = () => {
   return (
      <section className="home-features">
         <div className="home-image">
            <img src="https://placehold.it/400x300" className="img-responsive" alt="Home image" />
         </div>

         <section className="home-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi.</p>

            <div className="home-cta">
               <Link to="/login" className="btn btn-primary btn-lg">Click here to log in</Link>
            </div>
         </section>
      </section>
   );
}

export default HomeHeader;